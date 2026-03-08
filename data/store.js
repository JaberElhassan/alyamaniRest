const fs = require('fs');
const path = require('path');

const ADMIN_ORDERS_FILE = path.join(__dirname, 'admin-orders.json');

const categories = [
  { id: 1, name: 'Salad' },
  { id: 2, name: 'Sandwiches' },
  { id: 3, name: 'Juice' },
  { id: 4, name: 'Drink' },
  { id: 5, name: 'Sides' },
  { id: 6, name: 'Others' }
];

const menuItems = [
  {
    id: 1,
    category_id: 1,
    name: 'Greek Salad',
    ingredients: 'Lettuce, tomato, cucumber, olives, feta',
    price_small: 5.99,
    price_large: 8.99,
    image_url: '/images/salad_chicken_caesar.jpg'
  },
  {
    id: 2,
    category_id: 1,
    name: 'Chicken Caesar Salad',
    ingredients: 'Chicken, romaine, parmesan, croutons, Caesar dressing',
    price_small: 6.99,
    price_large: 9.99,
    image_url: '/images/salad_chicken_pasta.jpg'
  },
  {
    id: 3,
    category_id: 2,
    name: 'Club Sandwich',
    ingredients: 'Chicken, lettuce, tomato, mayo, bread',
    price_small: 4.99,
    price_large: 7.49,
    image_url: '/images/shawarma-1.jpeg'
  },
  {
    id: 4,
    category_id: 2,
    name: 'Veggie Sandwich',
    ingredients: 'Grilled vegetables, cheese, pesto, bread',
    price_small: 4.49,
    price_large: 6.99,
    image_url: '/images/pizza_vegy.jpg'
  },
  {
    id: 5,
    category_id: 3,
    name: 'Orange Juice',
    ingredients: 'Fresh orange extract, ice',
    price_small: 2.99,
    price_large: 4.49,
    image_url: '/images/drink_juice.jpg'
  },
  {
    id: 6,
    category_id: 3,
    name: 'Mixed Berry Juice',
    ingredients: 'Strawberry, blueberry, raspberry, mint',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/drink_maccaw.jpg'
  },
  {
    id: 7,
    category_id: 4,
    name: 'Cola',
    ingredients: 'Carbonated water, flavor syrup',
    price_small: 1.99,
    price_large: 2.99,
    image_url: '/images/drink_soft.jpg'
  },
  {
    id: 8,
    category_id: 4,
    name: 'Iced Tea',
    ingredients: 'Tea extract, lemon, ice',
    price_small: 2.49,
    price_large: 3.49,
    image_url: '/images/drink_lipton.jpg'
  },
  {
    id: 9,
    category_id: 5,
    name: 'French Fries',
    ingredients: 'Potatoes, salt, oil',
    price_small: 2.49,
    price_large: 3.99,
    image_url: '/images/potatoes_wedges.jpg'
  },
  {
    id: 10,
    category_id: 5,
    name: 'Onion Rings',
    ingredients: 'Onions, flour, batter, oil',
    price_small: 2.99,
    price_large: 4.49,
    image_url: '/images/onion_rings.jpg'
  },
  {
    id: 11,
    category_id: 6,
    name: 'Chocolate Brownie',
    ingredients: 'Cocoa, flour, butter, sugar',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/home17.jpg'
  },
  {
    id: 12,
    category_id: 6,
    name: 'Cheese Dip',
    ingredients: 'Cheddar cheese, cream, spices',
    price_small: 1.99,
    price_large: 3.49,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },
  {
    id: 13,
    category_id: 1,
    name: 'Shrimps Korab Salad',
    ingredients: 'Shrimps, greens, cucumber, lemon dressing',
    price_small: 7.49,
    price_large: 10.49,
    image_url: '/images/salad_shrimps_korab.jpg'
  },
  {
    id: 14,
    category_id: 2,
    name: 'Chicken Shawarma Wrap',
    ingredients: 'Chicken shawarma, garlic sauce, pickles, saj bread',
    price_small: 5.49,
    price_large: 7.99,
    image_url: '/images/shawarma_chicken_turkish.jpg'
  },
  {
    id: 15,
    category_id: 2,
    name: 'Beef Shawarma Wrap',
    ingredients: 'Beef shawarma, tahini sauce, onions, saj bread',
    price_small: 5.99,
    price_large: 8.49,
    image_url: '/images/shawarma_beef_turkish.jpg'
  },
  {
    id: 16,
    category_id: 3,
    name: 'Fresh Laban',
    ingredients: 'Cold laban, mint',
    price_small: 2.49,
    price_large: 3.49,
    image_url: '/images/drink_laban.jpg'
  },
  {
    id: 17,
    category_id: 4,
    name: 'Mineral Water',
    ingredients: 'Chilled bottled water',
    price_small: 0.99,
    price_large: 1.49,
    image_url: '/images/drink_water.jpg'
  },
  {
    id: 18,
    category_id: 5,
    name: 'Curly Potatoes',
    ingredients: 'Seasoned curly potatoes, salt',
    price_small: 2.99,
    price_large: 4.49,
    image_url: '/images/potatoes_curly.jpg'
  },
  {
    id: 19,
    category_id: 5,
    name: 'Chicken Nuggets Kids',
    ingredients: 'Crispy chicken nuggets, ketchup',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/side_nuggets_kids.jpg'
  },
  {
    id: 20,
    category_id: 6,
    name: 'Dynamita Shrimps',
    ingredients: 'Crispy shrimps, spicy dynamita sauce',
    price_small: 6.99,
    price_large: 9.99,
    image_url: '/images/shrimps_dinamita.jpg'
  },
  {
    id: 21,
    category_id: 2,
    name: 'Mexican Chicken Sandwich',
    ingredients: 'Grilled chicken, jalapeno, lettuce, chipotle mayo',
    price_small: 6.49,
    price_large: 8.99,
    image_url: '/images/burger_mexican_spicy.jpg'
  },
  {
    id: 22,
    category_id: 2,
    name: 'Yamani Burger Sandwich',
    ingredients: 'Beef patty, cheese, onion, house sauce',
    price_small: 6.99,
    price_large: 9.49,
    image_url: '/images/burger_alyamani.jpg'
  },
  {
    id: 23,
    category_id: 2,
    name: 'Chicken Fahita Sandwich',
    ingredients: 'Fahita chicken, peppers, onions, garlic sauce',
    price_small: 6.79,
    price_large: 9.29,
    image_url: '/images/fahita_chicken.jpg'
  },
  {
    id: 24,
    category_id: 2,
    name: 'Fahem Chicken Wrap',
    ingredients: 'Char-grilled chicken, pickles, garlic cream',
    price_small: 6.19,
    price_large: 8.79,
    image_url: '/images/chicken_fahem.jpg'
  },
  {
    id: 25,
    category_id: 2,
    name: 'Habaa Chicken Wrap',
    ingredients: 'Marinated chicken, lettuce, spicy mayo',
    price_small: 6.29,
    price_large: 8.89,
    image_url: '/images/chicken_habaa.jpg'
  },
  {
    id: 26,
    category_id: 2,
    name: 'Tawouk Sandwich',
    ingredients: 'Chicken tawouk, garlic sauce, fries inside',
    price_small: 6.59,
    price_large: 9.09,
    image_url: '/images/tawouk_fahem.jpg'
  },
  {
    id: 27,
    category_id: 2,
    name: 'Mixed Shawarma Sandwich',
    ingredients: 'Chicken and beef shawarma, pickles, tahini',
    price_small: 6.99,
    price_large: 9.69,
    image_url: '/images/shawarma_mshakal.jpg'
  },
  {
    id: 28,
    category_id: 2,
    name: 'Chicken Markouk Sandwich',
    ingredients: 'Chicken shawarma, markouk bread, garlic sauce',
    price_small: 6.39,
    price_large: 8.99,
    image_url: '/images/side_chicken_1.jpg'
  },
  {
    id: 29,
    category_id: 2,
    name: 'Chicken Saj Sandwich',
    ingredients: 'Saj chicken, tomatoes, pickles, sauce',
    price_small: 6.29,
    price_large: 8.89,
    image_url: '/images/side_chicken_2.jpg'
  },
  {
    id: 30,
    category_id: 2,
    name: 'Chicken Tawouk Saj',
    ingredients: 'Tawouk strips, lettuce, garlic paste',
    price_small: 6.49,
    price_large: 9.19,
    image_url: '/images/side_chicken_tawouk.jpg'
  },
  {
    id: 31,
    category_id: 2,
    name: 'Beef Falet Sandwich',
    ingredients: 'Beef strips, onion, parsley, tahini',
    price_small: 6.89,
    price_large: 9.59,
    image_url: '/images/side_shawarma_beef_falet.jpg'
  },
  {
    id: 32,
    category_id: 2,
    name: 'Beef Markouk Sandwich',
    ingredients: 'Beef shawarma, markouk bread, tahini sauce',
    price_small: 6.99,
    price_large: 9.79,
    image_url: '/images/side_shawarma_beef_markouk.jpg'
  },
  {
    id: 33,
    category_id: 2,
    name: 'Chicken Turkish Sandwich',
    ingredients: 'Turkish chicken shawarma, pickles, fries',
    price_small: 6.59,
    price_large: 9.29,
    image_url: '/images/shawarma_chicken_turkish.jpg'
  },
  {
    id: 34,
    category_id: 2,
    name: 'Beef Turkish Sandwich',
    ingredients: 'Turkish beef shawarma, onions, tahini',
    price_small: 6.99,
    price_large: 9.89,
    image_url: '/images/shawarma_beef_turkish.jpg'
  },
  {
    id: 35,
    category_id: 2,
    name: 'Classic Shawarma Roll',
    ingredients: 'Chicken shawarma, garlic, pickles',
    price_small: 5.99,
    price_large: 8.49,
    image_url: '/images/shawarma-1.jpeg'
  },
  {
    id: 36,
    category_id: 2,
    name: 'Spicy Shawarma Roll',
    ingredients: 'Spicy chicken shawarma, hot sauce, fries',
    price_small: 6.19,
    price_large: 8.79,
    image_url: '/images/shawarma-2.jpeg'
  },
  {
    id: 37,
    category_id: 2,
    name: 'Garlic Shawarma Roll',
    ingredients: 'Chicken shawarma, extra garlic, pickles',
    price_small: 6.09,
    price_large: 8.69,
    image_url: '/images/shawarma-3.jpeg'
  },
  {
    id: 38,
    category_id: 2,
    name: 'Alyamani Special Sandwich',
    ingredients: 'Mixed meat, cheese, signature sauce',
    price_small: 7.49,
    price_large: 10.29,
    image_url: '/images/burger_alyamani.jpg'
  },
  {
    id: 39,
    category_id: 2,
    name: 'Chicken Melt Sandwich',
    ingredients: 'Chicken strips, melted cheese, mayo',
    price_small: 6.69,
    price_large: 9.39,
    image_url: '/images/chicken_fahem.jpg'
  },
  {
    id: 40,
    category_id: 2,
    name: 'Double Chicken Sandwich',
    ingredients: 'Double chicken, lettuce, pickles, sauce',
    price_small: 7.19,
    price_large: 9.99,
    image_url: '/images/chicken_habaa.jpg'
  },
  {
    id: 41,
    category_id: 5,
    name: 'Curly Fries',
    ingredients: 'Crispy curly fries, seasoning',
    price_small: 2.89,
    price_large: 4.39,
    image_url: '/images/potatoes_curly.jpg'
  },
  {
    id: 42,
    category_id: 5,
    name: 'Wedges Potatoes',
    ingredients: 'Potato wedges, herbs, salt',
    price_small: 2.99,
    price_large: 4.49,
    image_url: '/images/potatoes_wedges.jpg'
  },
  {
    id: 43,
    category_id: 5,
    name: 'Mozzarella Rolls',
    ingredients: 'Mozzarella sticks, crispy coating',
    price_small: 3.49,
    price_large: 4.99,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },
  {
    id: 44,
    category_id: 5,
    name: 'Onion Rings Basket',
    ingredients: 'Golden onion rings, dipping sauce',
    price_small: 3.19,
    price_large: 4.79,
    image_url: '/images/onion_rings.jpg'
  },
  {
    id: 45,
    category_id: 5,
    name: 'Chicken Nuggets',
    ingredients: 'Crispy nuggets, ketchup',
    price_small: 3.39,
    price_large: 4.89,
    image_url: '/images/side_nuggets_kids.jpg'
  },
  {
    id: 46,
    category_id: 5,
    name: 'Chicken Side Plate',
    ingredients: 'Grilled chicken bites, garlic dip',
    price_small: 4.49,
    price_large: 6.29,
    image_url: '/images/side_chicken_1.jpg'
  },
  {
    id: 47,
    category_id: 5,
    name: 'Chicken Side Combo',
    ingredients: 'Chicken strips, fries, sauces',
    price_small: 4.99,
    price_large: 6.79,
    image_url: '/images/side_chicken_2.jpg'
  },
  {
    id: 48,
    category_id: 5,
    name: 'Chicken Tawouk Side',
    ingredients: 'Tawouk cubes, garlic cream',
    price_small: 4.79,
    price_large: 6.59,
    image_url: '/images/side_chicken_tawouk.jpg'
  },
  {
    id: 49,
    category_id: 5,
    name: 'Beef Falet Side',
    ingredients: 'Beef falet slices, tahini dip',
    price_small: 5.19,
    price_large: 6.99,
    image_url: '/images/side_shawarma_beef_falet.jpg'
  },
  {
    id: 50,
    category_id: 5,
    name: 'Beef Markouk Side',
    ingredients: 'Beef markouk pieces, house dip',
    price_small: 5.29,
    price_large: 7.09,
    image_url: '/images/side_shawarma_beef_markouk.jpg'
  },
  {
    id: 51,
    category_id: 5,
    name: 'Spicy Fries',
    ingredients: 'French fries, spicy seasoning',
    price_small: 2.99,
    price_large: 4.59,
    image_url: '/images/potatoes_wedges.jpg'
  },
  {
    id: 52,
    category_id: 5,
    name: 'Cheese Fries',
    ingredients: 'Fries, cheese sauce, herbs',
    price_small: 3.39,
    price_large: 4.99,
    image_url: '/images/potatoes_curly.jpg'
  },
  {
    id: 53,
    category_id: 5,
    name: 'Loaded Onion Rings',
    ingredients: 'Onion rings, cheese, spicy mayo',
    price_small: 3.49,
    price_large: 5.19,
    image_url: '/images/onion_rings.jpg'
  },
  {
    id: 54,
    category_id: 5,
    name: 'Garlic Potatoes',
    ingredients: 'Potatoes, garlic butter, parsley',
    price_small: 3.19,
    price_large: 4.69,
    image_url: '/images/home64.jpg'
  },
  {
    id: 55,
    category_id: 5,
    name: 'Crispy Mix Side',
    ingredients: 'Fries, onion rings, nuggets',
    price_small: 4.99,
    price_large: 6.99,
    image_url: '/images/side_nuggets_kids.jpg'
  },
  {
    id: 56,
    category_id: 5,
    name: 'Tawouk Bites',
    ingredients: 'Mini tawouk skewers, garlic dip',
    price_small: 4.59,
    price_large: 6.39,
    image_url: '/images/tawouk_fahem.jpg'
  },
  {
    id: 57,
    category_id: 5,
    name: 'Shawarma Side Mix',
    ingredients: 'Chicken and beef shawarma bites',
    price_small: 5.49,
    price_large: 7.39,
    image_url: '/images/shawarma_mshakal.jpg'
  },
  {
    id: 58,
    category_id: 5,
    name: 'Fahem Chicken Side',
    ingredients: 'Fahem chicken strips, dip',
    price_small: 4.69,
    price_large: 6.49,
    image_url: '/images/chicken_fahem.jpg'
  },
  {
    id: 59,
    category_id: 5,
    name: 'Habaa Chicken Side',
    ingredients: 'Habaa chicken bites, spicy sauce',
    price_small: 4.69,
    price_large: 6.49,
    image_url: '/images/chicken_habaa.jpg'
  },
  {
    id: 60,
    category_id: 5,
    name: 'Dynamita Side Shrimp',
    ingredients: 'Fried shrimp, dynamita sauce',
    price_small: 5.99,
    price_large: 7.99,
    image_url: '/images/shrimps_dinamita.jpg'
  },
  {
    id: 61,
    category_id: 6,
    name: 'Brownie Bites',
    ingredients: 'Chocolate brownie cubes, syrup',
    price_small: 3.29,
    price_large: 4.79,
    image_url: '/images/home11.jpg'
  },
  {
    id: 62,
    category_id: 6,
    name: 'Sweet Cheese Dip',
    ingredients: 'Cream cheese, honey drizzle',
    price_small: 2.99,
    price_large: 4.29,
    image_url: '/images/mozzarella_rolls_fried.jpg'
  },
  {
    id: 63,
    category_id: 6,
    name: 'Mini Pizza Bites',
    ingredients: 'Mini pizza squares, cheese, oregano',
    price_small: 4.49,
    price_large: 6.49,
    image_url: '/images/pizza_pepperoni.jpg'
  },
  {
    id: 64,
    category_id: 6,
    name: 'Yamani Pizza Slice',
    ingredients: 'Yamani sauce, cheese, toppings',
    price_small: 4.79,
    price_large: 6.79,
    image_url: '/images/pizza_alyamani.jpg'
  },
  {
    id: 65,
    category_id: 6,
    name: 'Veggie Pizza Slice',
    ingredients: 'Veggies, mozzarella, olive oil',
    price_small: 4.39,
    price_large: 6.29,
    image_url: '/images/home14.jpg'
  },
  {
    id: 66,
    category_id: 6,
    name: 'Pepperoni Pizza Slice',
    ingredients: 'Pepperoni, cheese, pizza sauce',
    price_small: 4.99,
    price_large: 6.99,
    image_url: '/images/home62.jpg'
  },
  {
    id: 67,
    category_id: 6,
    name: 'Sweet Sour Pizza Slice',
    ingredients: 'Sweet sour sauce, chicken, cheese',
    price_small: 4.89,
    price_large: 6.89,
    image_url: '/images/pizza_sweet_sour.jpg'
  },
  {
    id: 68,
    category_id: 6,
    name: 'Mexican Pizza Slice',
    ingredients: 'Mexican chicken, jalapeno, cheese',
    price_small: 4.99,
    price_large: 6.99,
    image_url: '/images/pizza_chicken_mexican.jpg'
  },
  {
    id: 69,
    category_id: 6,
    name: 'Shrimp Special Plate',
    ingredients: 'Shrimps, creamy sauce, herbs',
    price_small: 6.49,
    price_large: 8.99,
    image_url: '/images/shrimps_dinamita.jpg'
  },
  {
    id: 70,
    category_id: 6,
    name: 'Chef Surprise Dish',
    ingredients: 'Daily chef selection with house sauce',
    price_small: 5.99,
    price_large: 8.49,
    image_url: '/images/home12.jpg'
  },
  {
    id: 71,
    category_id: 1,
    name: 'Fresh Garden Salad',
    ingredients: 'Lettuce, cucumber, tomato, carrots, lemon dressing',
    price_small: 5.79,
    price_large: 8.29,
    image_url: '/images/salad_chicken_caesar.jpg'
  }
];

const cartItems = [];
let nextCartId = 1;
const loadAdminOrders = () => {
  try {
    if (!fs.existsSync(ADMIN_ORDERS_FILE)) {
      return [];
    }

    const raw = fs.readFileSync(ADMIN_ORDERS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to load admin orders from file:', error);
    return [];
  }
};

const persistAdminOrders = () => {
  try {
    fs.writeFileSync(ADMIN_ORDERS_FILE, JSON.stringify(adminOrders, null, 2), 'utf8');
  } catch (error) {
    console.error('Failed to persist admin orders to file:', error);
  }
};

const adminOrders = loadAdminOrders();

const DRINK_CATEGORIES = new Set(['Drink']);
const DRINK_IMAGE_PATHS = [
  '/images/drink_water.jpg',
  '/images/drink_juice.jpg',
  '/images/drink_kinza.jpeg',
  '/images/drink_laban.jpg',
  '/images/drink_lipton.jpg',
  '/images/drink_maccaw.jpg',
  '/images/drink_soft.jpg'
];

const getCategoryById = (id) => categories.find((category) => category.id === id) || null;

const withCategoryName = (item) => ({
  ...item,
  category_name: getCategoryById(item.category_id)?.name || ''
});

const withDrinkImage = (item) => {
  if (!DRINK_CATEGORIES.has(item.category_name)) {
    return item;
  }

  const fallbackIndex = (item.id - 1) % DRINK_IMAGE_PATHS.length;
  return {
    ...item,
    image_url: item.image_url || DRINK_IMAGE_PATHS[fallbackIndex]
  };
};

const getMenuItems = () => menuItems.map(withCategoryName).map(withDrinkImage);

const getMenuItemById = (id) => getMenuItems().find((item) => item.id === Number(id)) || null;

const getCartItemsDetailed = () =>
  cartItems
    .map((item) => {
      const menuItem = getMenuItemById(item.menu_item_id);
      if (!menuItem) {
        return null;
      }

      return {
        ...item,
        name: menuItem.name
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.id - a.id);

const getCartCount = () => cartItems.reduce((sum, item) => sum + Number(item.quantity || 0), 0);

const addToCart = (menuItemId, size) => {
  const menuItem = getMenuItemById(menuItemId);
  if (!menuItem) {
    return null;
  }

  const normalizedSize = size === 'large' ? 'large' : 'small';
  const unitPrice =
    normalizedSize === 'large' ? Number(menuItem.price_large) : Number(menuItem.price_small);

  const existing = cartItems.find(
    (item) => item.menu_item_id === Number(menuItemId) && item.size === normalizedSize
  );

  if (existing) {
    existing.quantity += 1;
    return existing;
  }

  const entry = {
    id: nextCartId++,
    menu_item_id: Number(menuItemId),
    size: normalizedSize,
    quantity: 1,
    unit_price: unitPrice
  };
  cartItems.push(entry);
  return entry;
};

const increaseCartItem = (id) => {
  const item = cartItems.find((entry) => entry.id === Number(id));
  if (item) {
    item.quantity += 1;
  }
};

const decreaseCartItem = (id) => {
  const index = cartItems.findIndex((entry) => entry.id === Number(id));
  if (index < 0) {
    return;
  }

  if (cartItems[index].quantity <= 1) {
    cartItems.splice(index, 1);
    return;
  }

  cartItems[index].quantity -= 1;
};

const deleteCartItem = (id) => {
  const index = cartItems.findIndex((entry) => entry.id === Number(id));
  if (index >= 0) {
    cartItems.splice(index, 1);
  }
};

const clearCart = () => {
  cartItems.length = 0;
};

const addAdminOrder = ({ orderNumber, date, total }) => {
  adminOrders.unshift({
    orderNumber: String(orderNumber),
    date: String(date),
    total: Number(total || 0)
  });
  persistAdminOrders();
};

const getAdminOrders = () => adminOrders.slice();

const clearAdminOrders = () => {
  adminOrders.length = 0;
  persistAdminOrders();
};

module.exports = {
  categories,
  getMenuItems,
  getMenuItemById,
  getCartItemsDetailed,
  getCartCount,
  addToCart,
  increaseCartItem,
  decreaseCartItem,
  deleteCartItem,
  clearCart,
  addAdminOrder,
  getAdminOrders,
  clearAdminOrders
};
