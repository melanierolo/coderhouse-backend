const fs = require('fs').promises;
const ProductManager = require('./ProductManager.js');

const productAll = new ProductManager();

class CartManager {
  constructor() {
    this.path = './src/models/carts.json';
    this.nextId = null;
    this.initNextId();
  }

  async initNextId() {
    this.nextId = await this.calculateNextId();
  }

  calculateNextId = async () => {
    try {
      let carts = await this.readCarts();
      if (carts.length === 0) {
        return 1;
      } else {
        const maxId = Math.max(...carts.map((cart) => parseInt(cart.id)));
        return maxId + 1;
      }
    } catch (error) {
      console.error('Error calculating the next ID:', error);
      return null;
    }
  };

  readCarts = async () => {
    let carts = await fs.readFile(this.path, 'utf-8');
    return JSON.parse(carts);
  };

  writeCarts = async (carts) => {
    await fs.writeFile(this.path, JSON.stringify(carts));
  };

  exist = async (id) => {
    let carts = await this.readCarts();
    return carts.find((cart) => cart.id === id);
  };

  addCarts = async () => {
    let cartsOld = await this.readCarts();
    let id = this.nextId;
    this.nextId++;
    let cartsConcat = [{ id: id, products: [] }, ...cartsOld];
    await this.writeCarts(cartsConcat);
    return 'Cart Added';
  };

  getCartsById = async (id) => {
    let cartById = await this.exist(id);
    if (!cartById) return 'Cart not found';
    return cartById;
  };

  addProductInCart = async (cartId, productId) => {
    let cartById = await this.exist(cartId);
    if (!cartById) return 'Cart not found';
    let productById = await productAll.exist(productId);
    if (!productById) return 'Product not found';

    let cartsAll = await this.readCarts();
    let cartFilter = cartsAll.filter((cart) => cart.id != cartId);

    if (cartById.products.some((prod) => prod.id === productId)) {
      let moreProductInCart = cartById.products.find(
        (prod) => prod.id === productId
      );
      moreProductInCart.quantity++;

      let cartsConcat = [cartById, ...cartFilter];
      await this.writeCarts(cartsConcat);
      return 'Product added to Cart';
    }

    cartById.products.push({ id: productById.id, quantity: 1 });
    let cartsConcat = [cartById, ...cartFilter];
    await this.writeCarts(cartsConcat);
    return 'Product Added to Cart';
  };
}

module.exports = CartManager;
