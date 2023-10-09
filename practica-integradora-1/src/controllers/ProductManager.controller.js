const fs = require('fs').promises;

class ProductManager {
  constructor() {
    this.path = './src/models/products.json';
  }

  readProducts = async () => {
    let products = await fs.readFile(this.path, 'utf-8');
    return JSON.parse(products);
  };

  writeProducts = async (product) => {
    await fs.writeFile(this.path, JSON.stringify(product));
  };

  exist = async (id) => {
    let products = await this.readProducts();
    return products.find((prod) => prod.id === id);
  };

  addProducts = async (product) => {
    const { title, description, code, price, status, stock, category } =
      product;

    const numericPrice = parseFloat(price);
    const booleanStatus = status === 'true'; // Convert the string to boolean
    const numericStock = parseInt(stock);
    const numericMinimo = parseInt(product.minimo);

    if (
      typeof title !== 'string' ||
      typeof description !== 'string' ||
      typeof code !== 'string' ||
      typeof numericPrice !== 'number' || // Check numericPrice
      typeof booleanStatus !== 'boolean' || // Check booleanStatus
      typeof numericStock !== 'number' || // Check numericStock
      typeof category !== 'string' ||
      typeof numericMinimo !== 'number'
    ) {
      return 'All fields are required and must have the correct value type';
    }

    console.log('Data of the product to be added:', product);
    let productsOld = await this.readProducts();

    product.id = productsOld.length + 1;

    const productWithTypes = {
      ...product,
      price: numericPrice,
      status: booleanStatus,
      stock: numericStock,
      minimo: numericMinimo,
    };

    let productAll = [...productsOld, productWithTypes];
    await this.writeProducts(productAll);
    console.log('Product added:', productWithTypes);
    return 'Product Added';
  };

  getProducts = async () => {
    return await this.readProducts();
  };

  getProductsById = async (id) => {
    let productsById = await this.exist(id);
    if (!productsById) return 'Product not found';
    return productsById;
  };

  updateProducts = async (id, product) => {
    let productsById = await this.exist(id);
    if (!productsById) return 'Product not found';
    await this.deleteProducts(id);
    let productsOld = await this.readProducts();
    let products = [{ ...product, id: id }, ...productsOld];
    await this.writeProducts(products);
    return 'Product Updated';
  };

  deleteProducts = async (id) => {
    let products = await this.readProducts();
    let existProducts = products.some((prod) => prod.id === id);
    if (existProducts) {
      let filterProducts = products.filter((prod) => prod.id != id);
      await this.writeProducts(filterProducts);
      return 'Product deleted';
    }
    return 'Product does not exist';
  };
}

module.exports = ProductManager;
