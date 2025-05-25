const connection = require("./connection");
require("../models/ProductModel");

connection.sync((alter = true));
