const express = require('express');
const ProductRouter = require('./routes/products');
const CartRouter = require('./routes/carts.js');
const { engine } = require('express-handlebars');
const path = require('path');
const utils = require('./utils.js');
const ProductManager = require('./controllers/ProductManager.controller');
const { Server } = require('socket.io'); // New
const viewsRouter = require('./router/views.routes.js');

const app = express();
const PORT = 8080;
const httpServer = app.listen(PORT, () =>
  console.log('Listening on port 8080')
);
const product = new ProductManager();

const SocketServer = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars configuration
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.resolve(utils.dirname + '/views'));
app.use('/', viewsRouter);

// Static files
app.use('/', express.static(utils.dirname + '/public'));

// Route for real-time products page
app.get('/realtimeproducts', (req, res) => {
  res.render('realTimeProducts');
});

// Socket.io server logic
SocketServer.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on('addProduct', async (productData) => {
    console.log('Product data received on the server:', productData);
    const result = await product.addProducts(productData);

    if (result === 'Product Added') {
      // Emit a message through WebSocket to update the real-time product list
      SocketServer.emit('productAdded', productData);
    }
  });
});

// Route to render home page with products
app.get('/', async (req, res) => {
  let allProducts = await product.getProducts();
  res.render('home', {
    title: 'Advanced Express / Handlebars',
    products: allProducts,
  });
});

// Route to render individual product page
app.get('/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  let prod = await product.getProductsById(id);
  res.render('prod', {
    title: 'Advanced Express / Handlebars',
    products: prod,
  });
});

// API routes
app.use('/api/products', ProductRouter);
app.use('/api/cart', CartRouter);
