const express = require('express');
const { categories, getMenuItems, getMenuItemById } = require('../data/store');

const router = express.Router();
router.get('/menu', (req, res, next) => {
  try {
    const items = getMenuItems();
    const beverageCategoryNames = new Set(['Juice', 'Drink']);
    let beverageSectionAdded = false;
    const slugify = (value) =>
      String(value || '')
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const grouped = categories.map((category) => {
      if (beverageCategoryNames.has(category.name)) {
        if (beverageSectionAdded) {
          return null;
        }

        beverageSectionAdded = true;
        const name = 'Juice & Drink';
        return {
          id: 'juice-drink',
          name,
          slug: slugify(name),
          items: items.filter((item) => beverageCategoryNames.has(item.category_name))
        };
      }

      const name = category.name;
      const isPizzaPasta =
        String(name || '').toLowerCase().includes('pizza') &&
        String(name || '').toLowerCase().includes('pasta');
      const isSauces = String(name || '').toLowerCase() === 'sauces';
      const isChicken = String(name || '').toLowerCase() === 'chicken';

      const pizzaPastaItems = items.filter((item) => item.category_name === category.name);
      const categoryItems = pizzaPastaItems.map((item, index) => ({
        ...item,
        disableAddToCart:
          (isPizzaPasta && (index < 2 || index === pizzaPastaItems.length - 1)) ||
          (isSauces && index === 0) ||
          isChicken
      }));

      return {
        id: category.id,
        name,
        slug: slugify(name),
        items: categoryItems
      };
    }).filter(Boolean);
    const priorityOrder = ['Sides', 'Sandwiches'];
    const prioritizedSections = priorityOrder
      .map((name) => grouped.find((category) => category.name === name))
      .filter(Boolean);
    const orderedGrouped = [
      ...prioritizedSections,
      ...grouped.filter((category) => !priorityOrder.includes(category.name))
    ];

    res.render('menu', {
      title: 'Menu',
      bodyClass: 'menu-page',
      categories: orderedGrouped
    });
  } catch (error) {
    next(error);
  }
});

router.get('/menu/item/:id', async (req, res, next) => {
  try {
    const item = getMenuItemById(req.params.id);
    if (!item) {
      return res.status(404).send('Menu item not found.');
    }

    res.render('menu-detail', {
      title: item.name,
      item
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
