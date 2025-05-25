const express = require("express");
let productController = require("../controllers/ProductController");

productController = new productController();

const ProductsRoutes = express.Router();

ProductsRoutes.get("/products", productController.getAll);

module.exports = ProductsRoutes;
