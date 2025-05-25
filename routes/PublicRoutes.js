const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const AuthController = require("../controllers/AuthController");

const PublicRoutes = express.Router();

PublicRoutes.post("/login", (request, response) => {
  const { login, password } = request.body;
  const auth = new AuthController();
  const userData = auth.login(login, password);
  console.log(userData);
  if (userData) {
    // Verifica se userData não é null
    const token = jwt.sign(userData, process.env.APP_KEY_TOKEN, {
      expiresIn: "1h",
    });
    return response.json({ token });
  }
  return response.status(401).json({ message: "Credenciais inválidas" });
});

module.exports = PublicRoutes;
