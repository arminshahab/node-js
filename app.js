import express from "express";
import adminRoutes from "./routes/admin.route.js";
import shopRoutes from "./routes/shop.route.js";
import { get404 } from "./controllers/error.controller.js";

import path from 'path';
import { fileURLToPath } from 'url';

export const rootDir = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(get404);

app.listen(3000, () => {
  console.log("server started on port 3000");
});
