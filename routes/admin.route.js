import express from "express";
const router = express.Router();
import {
  getAddProduct,
  getProducts,
  postAddProduct,
} from "../controllers/admin.controller.js";

router.get("/add-product", getAddProduct);
router.get("/products",getProducts );
router.post("/add-product", postAddProduct);

export default router;
