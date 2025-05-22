const express = require("express");
const ProductsRoutes = require("./rotas/ProductsRotas");
const PublicRoutes = require("./rotas/PublicRoutes");

const app = express();
app.use(ProductsRoutes);
app.use(PublicRoutes);

app.listen(3000, "localhost", () =>
  console.log("Servidor executando em http://localhost:3000")
);
