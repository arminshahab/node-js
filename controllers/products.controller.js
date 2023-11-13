import { Product } from "../models/product.js";

export const getAddProduct = (req, res) => {
  res.render("add-product", {
    path: "/admin/add-product",
    title: "add product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

export const postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

export const getProducts = (req, res) => {
  const products = Product.fetchAll((products) => {
    res.render("shop", {
      products,
      path: "/",
      title: "my products",
      activeShop: true,
      productCSS: true,
    });
  });
};
