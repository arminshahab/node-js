import express from "express";
const router = express.Router();
import {
  getAddProduct,
  postAddProduct,
} from "../controllers/products.controller.js";

router.get("/add-product", getAddProduct);
router.post("/add-product", postAddProduct);

export default router;
