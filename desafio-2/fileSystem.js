// File System
import { promises as fs } from 'fs';

class ProductManager {
  constructor() {
    this.patch = './folder/products.txt';
  }
  static = 0;
  addProduct = async (title, description, price, thumbnailImg, code, stock) => {
    let newProduct = {
      title,
      description,
      price,
      thumbnailImg,
      code,
      stock,
    };
    console.log(newProduct);
    //await fs.writeFile(this.patch, 'Hello everyone');
  };
}

const products = new ProductManager();

products.addProduct(
  'TitleOne',
  'DescriptionOne',
  2000,
  'ImageUrl',
  'a1b2c3',
  5
);
