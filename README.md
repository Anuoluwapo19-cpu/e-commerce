# Chic Boutique

A simple, beginner-friendly e-commerce demo site built with plain HTML, CSS
and JavaScript (no frameworks, no build tools). It sells wears for Men,
Women, and Children.

## How to run it

No installation needed. Just open `index.html` in your browser (double-click
it, or use a tool like the VS Code "Live Server" extension for the best
experience).

## Pages

- `index.html` — Home page. Shows all products with buttons to filter by
  category (All / Men / Women / Children) and "Add to Cart" buttons.
- `cart.html` — Shows everything in your cart, lets you remove items, and
  has a demo "Checkout" button.
- `signup.html` — Create an account.
- `login.html` — Log in to an existing account.

## Folder structure

```
e-commerce/
├── index.html
├── cart.html
├── login.html
├── signup.html
├── css/
│   ├── style.css     -> shared styles (header, footer, buttons, layout)
│   ├── home.css       -> styles just for the home page
│   ├── auth.css        -> styles just for login/signup forms
│   └── cart.css          -> styles just for the cart page
└── js/
    ├── products-data.js  -> the list of products (name, price, image...)
    ├── storage.js        -> helper functions to read/write localStorage
    ├── header.js         -> updates the cart count + login links in the nav
    ├── home.js           -> shows products, handles filtering + add to cart
    ├── cart.js           -> shows cart items, remove item, checkout
    └── auth.js           -> handles the sign up and login forms
```

## How data is stored

There is no backend/database here — everything is saved in the browser's
`localStorage`:

- `boutiqueCart` — items currently in the cart
- `boutiqueUsers` — accounts created through the Sign Up page
- `boutiqueLoggedInUser` — whoever is currently logged in

This is great for learning, but keep in mind real e-commerce sites use a
secure backend server and database, and never store passwords in plain
text like this demo does.

## Ideas to extend it (optional)

- Add a search box next to the filter buttons
- Add a "quantity" +/- control on the cart page
- Add a product details page
- Add form validation messages that appear under each input instead of one
  general error message
