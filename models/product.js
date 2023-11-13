import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, "..", "data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (e, content) => {
    try {
      return cb(JSON.parse(content));
    } catch (e) {
      return cb([]);
    }
  });
};

export class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(p, JSON.stringify(products), (e) => {
        console.log(e);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
