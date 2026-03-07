const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars');
require('dotenv').config();
const { getCartCount } = require('./data/store');

const pagesRoutes = require('./routes/pages');
const menuRoutes = require('./routes/menu');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    helpers: {
      formatCurrency: (value) => {
        const amount = Number(value || 0);
        return `$${amount.toFixed(2)}`;
      },
      calcSubtotal: (price, qty) => {
        const subtotal = Number(price || 0) * Number(qty || 0);
        return `$${subtotal.toFixed(2)}`;
      }
    }
  })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.locals.cartItemCount = getCartCount();
  next();
});

app.use('/', pagesRoutes);
app.use('/', menuRoutes);
app.use('/cart', cartRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong. Check server logs.');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
