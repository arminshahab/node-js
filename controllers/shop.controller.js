import { Product } from "../models/product.js";

export const getProducts = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      products,
      path: "/products",
      title: "All Products",
    });
  });
};

export const getIndex = (req, res) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      products,
      path: "/",
      title: "Shop",
    });
  });
};

export const getCart = (req, res) => {
  res.render("shop/cart", {
    path: "/cart",
    title: "Your Cart",
  });
};

export const getCheckout = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    title: "Checkout",
  });
};