const { Sequelize } = require("sequelize");

const connection = new Sequelize({
  dialect: "mysql",
  database: "dripstore",
  host: "localhost",
  username: "root",
  password: "Qwe12345",
  port: 3306,
});

module.exports = connection;
