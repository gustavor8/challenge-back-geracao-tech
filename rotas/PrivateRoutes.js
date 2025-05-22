const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const PrivateRoutes = express.Router();
//Middleware
PrivateRoutes.use((request, response, next) => {
  let auth = false;
  if (request.headers.token) {
    try {
      jwt.verify(request.headers.token, process.env.APP_KEY_TOKEN);
      auth = true;
    } catch (e) {
      response.status(403).send("Forbidden \n" + e);
    }
  }
});

PrivateRoutes.use();

module.exports = PrivateRoutes;
