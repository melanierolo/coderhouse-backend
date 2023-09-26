const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000');

socket.emit('message', 'Hello, I am communicating via a WebSocket');

socket.on('productAdded', (product) => {
  // Create a new HTML element for the product
  const newProductElement = document.createElement('div');
  newProductElement.innerHTML = `
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <!-- Other fields of the product -->
    `;

  // Add the new product to the products container
  const productsContainer = document.getElementById('productsContainer');
  productsContainer.appendChild(newProductElement);
});
