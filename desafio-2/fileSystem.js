// File System
import { promises as fs } from 'fs';

class ProductManager {
  constructor() {
    this.patch = './folder/products.txt';
    this.products = [];
  }
  // automatic id
  static id = 0;

  addProduct = async (title, description, price, thumbnailImg, code, stock) => {
    // id automático
    ProductManager.id += 1;
    // Create an instance of the class inside the method like this:
    let newProduct = {
      title,
      description,
      price,
      thumbnailImg,
      code,
      stock,
      id: ProductManager.id,
    };
    this.products.push(newProduct);
    console.log(newProduct);
    //access the 'path' property of the new instance:
    await fs.writeFile(this.patch, JSON.stringify(this.products));
  };

  getProduct = async () => {
    let result = await fs.readFile(this.patch, 'utf-8');
    console.log(JSON.parse(result));
  };
}

const products = new ProductManager();

/*products.addProduct(
  'TitleTwo',
  'DescriptionOne',
  2000,
  'ImageUrl',
  'a1b2c3',
  5
);
products.addProduct(
  'TitleTwo',
  'DescriptionTwo',
  4000,
  'ImageUrlTwo',
  'a1b2c3',
  5
);
products.addProduct(
  'TitleThree',
  'DescriptionThree',
  2500,
  'ImageUrlThree',
  'a1b2c3',
  8
);*/

// getProducts
products.getProduct();
