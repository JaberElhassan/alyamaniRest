const express = require('express');
const { Resend } = require('resend');
const { getMenuItems, getAdminOrders, clearAdminOrders } = require('../data/store');

const router = express.Router();
const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || 'sam_1072@yahoo.com';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'alyamani';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'alyamani';
const ADMIN_COOKIE = 'adminAuth';
const ADMIN_POLL_INTERVAL_MS = 5000;

const getOrdersVersion = () => {
  const orders = getAdminOrders();
  const latest = orders[0];
  return {
    token: `${orders.length}:${latest?.orderNumber || ''}:${latest?.date || ''}`,
    count: orders.length
  };
};

const parseCookies = (cookieHeader = '') =>
  Object.fromEntries(
    cookieHeader
      .split(';')
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const idx = part.indexOf('=');
        if (idx < 0) {
          return [part, ''];
        }
        const key = part.slice(0, idx).trim();
        const value = decodeURIComponent(part.slice(idx + 1).trim());
        return [key, value];
      })
  );

const isAdminLoggedIn = (req) => parseCookies(req.headers.cookie || '')[ADMIN_COOKIE] === '1';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFrom = process.env.RESEND_FROM;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

router.get('/', (req, res) => {
  res.render('home', { title: 'Home', bodyClass: 'home-page' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', bodyClass: 'contact-page' });
});

router.get('/login', (req, res) => {
  if (isAdminLoggedIn(req)) {
    return res.redirect('/admin');
  }

  res.render('login', { title: 'Login', bodyClass: 'login-page' });
});

router.post('/login', (req, res) => {
  const username = String(req.body.username || '').trim();
  const password = String(req.body.password || '').trim();

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(401).render('login', {
      title: 'Login',
      bodyClass: 'login-page',
      errorMessage: 'Invalid username or password.',
      username
    });
  }

  res.setHeader('Set-Cookie', `${ADMIN_COOKIE}=1; Path=/; HttpOnly; SameSite=Lax`);
  return res.redirect('/admin');
});

router.get('/admin', (req, res) => {
  if (!isAdminLoggedIn(req)) {
    return res.redirect('/login');
  }
  const { token } = getOrdersVersion();

  return res.render('admin', {
    title: 'Admin',
    bodyClass: 'admin-page',
    username: ADMIN_USERNAME,
    orders: getAdminOrders(),
    ordersVersion: token,
    adminPollIntervalMs: ADMIN_POLL_INTERVAL_MS
  });
});

router.get('/admin/orders-version', (req, res) => {
  if (!isAdminLoggedIn(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return res.json(getOrdersVersion());
});

router.post('/admin/clear-transactions', (req, res) => {
  if (!isAdminLoggedIn(req)) {
    return res.redirect('/login');
  }

  clearAdminOrders();
  return res.redirect('/admin');
});

const logoutHandler = (req, res) => {
  res.setHeader('Set-Cookie', `${ADMIN_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
  return res.redirect('/login');
};

router.get('/logout', logoutHandler);
router.post('/logout', logoutHandler);

router.post('/contact', async (req, res) => {
  const {
    name = '',
    email = '',
    phone = '',
    subject = '',
    message = ''
  } = req.body;

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedPhone = String(phone).trim();
  const trimmedSubject = String(subject).trim();
  const trimmedMessage = String(message).trim();
  const formData = {
    name: trimmedName,
    email: trimmedEmail,
    phone: trimmedPhone,
    subject: trimmedSubject,
    message: trimmedMessage
  };

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return res.status(400).render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      errorMessage: 'Please fill in all required fields before sending your message.',
      formData
    });
  }

  if (!resend || !resendApiKey || !resendFrom) {
    return res.status(500).render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      errorMessage: 'Email service is not configured yet. Please set RESEND_API_KEY and RESEND_FROM in .env.',
      formData
    });
  }

  try {
    const { error } = await resend.emails.send({
      from: resendFrom,
      to: CONTACT_EMAIL_TO,
      replyTo: trimmedEmail,
      subject: `Contact Form: ${trimmedSubject}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        `Phone: ${trimmedPhone || 'N/A'}`,
        `Subject: ${trimmedSubject}`,
        '',
        'Message:',
        trimmedMessage
      ].join('\n'),
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${trimmedName}</p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Phone:</strong> ${trimmedPhone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${trimmedSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${trimmedMessage.replace(/\n/g, '<br>')}</p>
      `
    });

    if (error) {
      console.error('Contact email send failed:', error);
      return res.status(500).render('contact', {
        title: 'Contact',
        bodyClass: 'contact-page',
        errorMessage: 'Could not send your message right now. Please try again in a few minutes.',
        formData
      });
    }

    res.render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      submitted: true
    });
  } catch (error) {
    console.error('Contact email send failed:', error);
    const isAuthError =
      error?.code === 'EAUTH' ||
      error?.command === 'AUTH' ||
      String(error?.response || '').includes('535');
    const friendlyMessage = isAuthError
      ? 'Email authentication failed. Please confirm your SMTP username and app password.'
      : 'Could not send your message right now. Please try again in a few minutes.';
    res.status(500).render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      errorMessage: friendlyMessage,
      formData
    });
  }
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About', bodyClass: 'about-page' });
});

router.get('/services', (req, res) => {
  res.render('services', { title: 'Services', bodyClass: 'services-page' });
});

router.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Gallery', bodyClass: 'gallery-page' });
});

module.exports = router;
