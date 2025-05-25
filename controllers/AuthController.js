const { Model } = require("sequelize");
const UserModel = require("../models/UserModel");
class AuthController {
  login(login, password) {
    if (login === "teste" && password === "teste") {
      return { userId: 1, role: "admin" }; // Retorna objeto
    }
    return null;
  }
}

module.exports = AuthController;
