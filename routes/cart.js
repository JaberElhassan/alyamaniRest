const express = require('express');
const {
  getCartItemsDetailed,
  addToCart,
  increaseCartItem,
  decreaseCartItem,
  deleteCartItem,
  clearCart,
  addAdminOrder
} = require('../data/store');

const router = express.Router();

const getCartSnapshot = () => {
  const taxRate = Number(process.env.TAX_RATE ?? 0.08);
  const items = getCartItemsDetailed();

  const subtotal = items.reduce((sum, item) => sum + Number(item.unit_price) * Number(item.quantity), 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return { items, subtotal, tax, total };
};

router.get('/', async (req, res, next) => {
  try {
    const { items, subtotal, tax, total } = getCartSnapshot();

    res.render('cart', {
      title: 'Cart',
      items,
      subtotal,
      tax,
      total
    });
  } catch (error) {
    next(error);
  }
});

router.get('/checkout', async (req, res, next) => {
  try {
    const { items, subtotal, tax, total } = getCartSnapshot();

    if (!items.length) {
      return res.redirect('/cart');
    }

    res.render('checkout', {
      title: 'Checkout',
      bodyClass: 'checkout-page',
      items,
      subtotal,
      tax,
      total
    });
  } catch (error) {
    next(error);
  }
});

router.post('/checkout', async (req, res, next) => {
  try {
    const { items } = getCartSnapshot();

    if (!items.length) {
      return res.redirect('/cart');
    }

    const subtotal = items.reduce(
      (sum, item) => sum + Number(item.unit_price || 0) * Number(item.quantity || 0),
      0
    );
    const taxRate = Number(process.env.TAX_RATE ?? 0.08);
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const orderRef = `AY-${Date.now().toString().slice(-8)}`;
    const orderDate = new Date();
    const orderDateLabel = orderDate.toLocaleString();
    const clientOrderTime = typeof req.body.order_time_client === 'string' ? req.body.order_time_client.trim() : '';
    const isPickup = req.body.order_type === 'pickup';
    const orderType = isPickup ? 'Pickup' : 'Delivery';
    const customerName = typeof req.body.delivery_name === 'string' ? req.body.delivery_name.trim() : '';
    const customerPhone = typeof req.body.delivery_phone === 'string' ? req.body.delivery_phone.trim() : '';
    const customerAddress = typeof req.body.delivery_address === 'string' ? req.body.delivery_address.trim() : '';

    clearCart();
    addAdminOrder({
      orderNumber: orderRef,
      date: orderDateLabel,
      total,
      orderType,
      customerName,
      pickupTotal: isPickup ? total : 0,
      deliveryTotal: isPickup ? 0 : total
    });

    res.render('checkout-success', {
      title: 'Order Placed',
      bodyClass: 'checkout-page',
      orderRef,
      total,
      subtotal,
      tax,
      items,
      orderDate: orderDateLabel,
      clientOrderTime,
      orderType,
      isPickup,
      customerName,
      customerPhone,
      customerAddress,
      pickupTotal: isPickup ? total : 0,
      deliveryTotal: isPickup ? 0 : total
    });
  } catch (error) {
    next(error);
  }
});

router.post('/add/:id', async (req, res, next) => {
  try {
    const menuItemId = Number(req.params.id);
    const size = req.body.size === 'large' ? 'large' : req.body.size === 'medium' ? 'medium' : 'small';

    const added = addToCart(menuItemId, size);
    if (!added) {
      return res.status(404).send('Menu item not found.');
    }

    res.redirect('/cart');
  } catch (error) {
    next(error);
  }
});

router.post('/increase/:id', async (req, res, next) => {
  try {
    increaseCartItem(req.params.id);
    res.redirect('/cart');
  } catch (error) {
    next(error);
  }
});

router.post('/decrease/:id', async (req, res, next) => {
  try {
    decreaseCartItem(req.params.id);
    res.redirect('/cart');
  } catch (error) {
    next(error);
  }
});

router.post('/delete/:id', async (req, res, next) => {
  try {
    deleteCartItem(req.params.id);
    res.redirect('/cart');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
