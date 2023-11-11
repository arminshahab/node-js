import express from "express";
const router = express.Router();

export const products = []

router.get("/add-product", (req, res) => {
  res.render('add-product', {
    path: "/admin/add-product",
    title: 'add product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

router.post("/add-product", (req, res) => {
  products.push({title: req.body.title})
  res.redirect("/");
});

export default router;
