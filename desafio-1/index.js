class ProductManager {
  constructor() {
    this.product = [];
  }

  addProduct(title, description, price, thumbnailImg, code, stock) {
    this.product.push({ title, description, price, thumbnailImg, code, stock });
  }
}
