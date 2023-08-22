class ProductManager {
  constructor() {
    this.products = [];
  }

  // id automático
  static id = 0;

  addProduct(title, description, price, thumbnailImg, code, stock) {
    ProductManager.id += 1;
    this.products.push({
      title,
      description,
      price,
      thumbnailImg,
      code,
      stock,
      id: ProductManager.id,
    });
  }

  getProduct() {
    return this.products;
  }
}

// Probando

const products = new ProductManager();

products.addProduct(
  'producto prueba',
  'Este es un producto prueba',
  200,
  'Sin imagen',
  'abc123',
  25
);

console.log(products.getProduct());

// Test - segundo producto
const productsTwo = new ProductManager();

productsTwo.addProduct(
  'producto prueba 2',
  'Este es un producto prueba 2',
  200,
  'Sin imagen 2',
  'abc123-2',
  25
);

console.log(productsTwo.getProduct());
