const { Router } = require('express'); // Importing the Router from express
const CartManager = require('../controllers/CartMananger.controller'); // Importing the CartManager controller

const CartRouter = Router(); // Creating a new router instance
const carts = new CartManager(); // Creating an instance of CartManager

// Route to add a new cart
CartRouter.post('/', async (req, res) => {
  res.send(await carts.addCarts()); // Respond with the result of adding a cart
});

// Route to retrieve all carts
CartRouter.get(`/`, async (req, res) => {
  res.send(await carts.readCarts()); // Respond with all carts
});

// Route to retrieve a specific cart by ID
CartRouter.get(`/:id`, async (req, res) => {
  let id = parseInt(req.params.id); // Extracting the cart ID from the request parameters
  res.send(await carts.getCartsById(id)); // Respond with the cart information
});

// Route to add a product to a cart
CartRouter.post(`/:cid/products/:pid`, async (req, res) => {
  let cartId = parseInt(req.params.cid); // Extracting the cart ID from the request parameters
  let productId = parseInt(req.params.pid); // Extracting the product ID from the request parameters
  res.send(await carts.addProductInCart(cartId, productId)); // Respond with the result of adding the product to the cart
});

export default CartRouter; // Exporting the CartRouter for use in other files
