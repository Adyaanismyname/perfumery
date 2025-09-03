const express = require("express");
const Router = express.Router();
const { getAllProducts } = require("../controllers/productController");


Router.get("/get-all-products", getAllProducts);



export default Router;
