const { Router } = require('express');
const ProductManager = require('../controllers/ProductMananger.controller');
const ProductRouter = Router(); // Creating a new router instance
const product = new ProductManager(); // Creating an instance of ProductManager

// Route to get all products
ProductRouter.get('/', async (req, res) => {
  res.send(await product.getProducts()); // Respond with all products
});

// Route to get a specific product by ID
ProductRouter.get('/:id', async (req, res) => {
  let id = parseInt(req.params.id); // Extracting the product ID from the request parameters
  res.send(await product.getProductsById(id)); // Respond with the product information
});

// Route to add a new product
ProductRouter.post('/', async (req, res) => {
  let newProduct = req.body; // Extracting the new product data from the request body
  res.send(await product.addProducts(newProduct)); // Respond with the result of adding a product
});

// Route to update an existing product
ProductRouter.put('/:id', async (req, res) => {
  let id = parseInt(req.params.id); // Extracting the product ID from the request parameters
  let updateProducts = req.body; // Extracting the updated product data from the request body
  res.send(await product.updateProducts(id, updateProducts)); // Respond with the result of updating the product
});

// Route to delete a product by ID
ProductRouter.delete('/:id', async (req, res) => {
  let id = parseInt(req.params.id); // Extracting the product ID from the request parameters
  res.send(await product.deleteProducts(id)); // Respond with the result of deleting the product
});

export default ProductRouter; // Exporting the ProductRouter for use in other files
