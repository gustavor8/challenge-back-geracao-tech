const express = require("express");
let productController = require("../controllers/ProductController");

productController = new productController();
const ProductsRoutes = express.Router();

// Mapping routes
const routes = [
  { method: "get", path: "/products", handler: "getAll" },
  { method: "get", path: "/products/:id", handler: "getById" },
  { method: "post", path: "/products", handler: "create" },
  { method: "put", path: "/products/:id", handler: "update" },
  { method: "delete", path: "/products/:id", handler: "delete" },
];

// Routes dinamic
routes.forEach(({ method, path, handler }) => {
  ProductsRoutes[method](path, (req, res) =>
    productController[handler](req, res)
  );
});

module.exports = ProductsRoutes;
