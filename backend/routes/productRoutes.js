const express = require("express");
const Router = express.Router();
const { getAllProducts, getFeaturedProducts } = require("../controllers/productController");


Router.get("/get-all-products", getAllProducts);
Router.get("/get-featured-products", getFeaturedProducts);



module.exports = Router;
