import express from "express";
import path from "path";
import adminRoutes from "./routes/admin.route.js";
import shopRoutes from "./routes/shop.route.js";

const app = express();
app.set('view engine', 'ejs')

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
