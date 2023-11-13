import { Product } from "../models/product.js";

export const getAddProduct = (req, res) => {
  res.render("admin/add-product", {
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
  Product.fetchAll((products) => {
    res.render("admin/products", {
      products,
      path: "/admin/products",
      title: "Admin Products",
    });
  });
};
