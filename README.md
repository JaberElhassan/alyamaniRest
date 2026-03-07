# AL YAMANI RESTAURANT Website

Node.js + Express + Handlebars (`.hbs`) website with:
- Navbar pages: Home, Contact, Menu, About, Services, Gallery, Others
- Menu grouped by category cards (Salad, Sandwiches, Juice, Drink, Sides, Others)
- Item detail page with ingredients, size (small/large), image, and Add to Cart button
- Cart page with name, price, quantity, subtotal, total, and `+` / `-` quantity actions

## 1) Install & run

```bash
npm install
npm run dev
```

Server: `http://localhost:3000`

## 2) Notes

- Cart data is currently stored in memory (`data/store.js`).
- `+` and `-` buttons update cart quantity in memory during runtime.
