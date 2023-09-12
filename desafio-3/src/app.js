const express = require('express');
const app = express();
const port = 8080;

const products = [
  {
    id: 1,
    name: 'wireless mouse',
    price: '14.490',
  },
  {
    id: 2,
    name: 'ergonomic keyboard',
    price: '19.490',
  },
  {
    id: 3,
    name: 'ultra HD monitor',
    price: '114.490',
  },
  {
    id: 4,
    name: 'surround sound speaker',
    price: '34.490',
  },
  {
    id: 5,
    name: 'gaming mouse-pad',
    price: '4.490',
  },
  {
    id: 6,
    name: 'noise-canceling headset',
    price: '64.490',
  },
];

app.get('/products', (req, res) => {
  const limit = parseInt(req.query.limit) || products.length;
  const limitedProducts = products.slice(0, limit);
  res.json(limitedProducts);
});

app.get('/products/:productId', (req, res) => {
  const { productId } = req.params;
  const productById = products.find(
    (element) => element.id === parseInt(productId)
  );
  productById
    ? res.json(productById)
    : res.send(`No products exist with the id ${productId}`);
});

app.use('*', (req, res) => {
  res.send('page not found');
});

app.listen(port, () => console.log(`Server listening: ${port}`));
