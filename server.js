require("./config/syncforce");
const express = require("express");
const PublicRoutes = require("./routes/PublicRoutes");
const PrivateRoutes = require("./routes/PrivateRoutes");

const app = express();
app.use(express.json());
app.use(PublicRoutes);
app.use(PrivateRoutes);

app.listen(3000, "localhost", () =>
  console.log("Servidor executando em http://localhost:3000")
);
