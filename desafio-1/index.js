class ProductManager {
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, thumbnailImg, code, stock) {
    this.products.push({
      title,
      description,
      price,
      thumbnailImg,
      code,
      stock,
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
