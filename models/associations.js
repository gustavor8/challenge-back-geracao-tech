const connection = require("../config/connection");
const ProductModel = require("./ProductModel");
const ImageModel = require("./ImageModel");

// Definindo as associações
ProductModel.hasMany(ImageModel, {
  foreignKey: "productId",
  as: "images",
});

ImageModel.belongsTo(ProductModel, {
  foreignKey: "productId",
  as: "product",
});

// Exportando os modelos associados
module.exports = {
  connection,
  ProductModel,
  ImageModel,
};
