class ProductManager {
  constructor() {
    this.products = [];
  }

  // id automático
  static id = 0;

  addProduct(title, description, price, thumbnailImg, code, stock) {
    // Verificar si el code del producto ya existe
    const codeExists = this.products.some((product) => product.code === code);

    if (title && description && price && code && !codeExists) {
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
    } else {
      console.log('Error: Inválido o datos duplicados');
    }
  }

  getProduct() {
    return this.products;
  }

  getProductById(id) {
    const isProductExist = this.products.find((product) => product.id === id);
    return isProductExist ? console.log('Exists') : console.log('Not found');
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

// Test - ID
console.log(products.getProductById(3));
console.log(products.getProductById(1));

// Test - Añadir producto con el code duplicado
products.addProduct(
  'producto repetido',
  'Este es un producto repetido',
  150,
  'Otra imagen',
  'abc123', //  repetido
  15
);
