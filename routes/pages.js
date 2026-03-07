const express = require('express');
const nodemailer = require('nodemailer');
const { getMenuItems } = require('../data/store');

const router = express.Router();
const CONTACT_EMAIL_TO = 'sam_1072@yahoo.com';

const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure,
  auth: process.env.SMTP_USER && process.env.SMTP_PASS
    ? {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
    : undefined
});

router.get('/', (req, res) => {
  res.render('home', { title: 'Home', bodyClass: 'home-page' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', bodyClass: 'contact-page' });
});

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

  if (!trimmedName || !trimmedEmail || !trimmedSubject || !trimmedMessage) {
    return res.status(400).render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      errorMessage: 'Please fill in all required fields before sending your message.'
    });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      errorMessage: 'Email service is not configured yet. Please set SMTP settings in .env.'
    });
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  try {
    await transporter.sendMail({
      from: fromAddress,
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

    res.render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      submitted: true
    });
  } catch (error) {
    console.error('Contact email send failed:', error);
    res.status(500).render('contact', {
      title: 'Contact',
      bodyClass: 'contact-page',
      errorMessage: 'Could not send your message right now. Please try again in a few minutes.'
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

router.get('/others', async (req, res, next) => {
  try {
    const menuItems = getMenuItems();
    const primaryMatch = menuItems
      .filter((item) => {
        const name = item.name.toLowerCase();
        const category = item.category_name.toLowerCase();
        return name.includes('chicken') && (name.includes('shawarma') || category === 'sides');
      })
      .sort((a, b) => {
        const aSide = a.name.toLowerCase().includes('side') ? 0 : 1;
        const bSide = b.name.toLowerCase().includes('side') ? 0 : 1;
        if (aSide !== bSide) {
          return aSide - bSide;
        }
        return a.id - b.id;
      })
      .slice(0, 1);

    let featuredItem = primaryMatch[0] || null;

    if (!featuredItem) {
      featuredItem = menuItems
        .slice()
        .sort((a, b) => a.id - b.id)
        .find(() => true) || null;
    }

    res.render('others', {
      title: 'Others',
      bodyClass: 'others-page',
      featuredItem
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
