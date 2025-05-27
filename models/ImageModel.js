const { DataTypes, Model } = require("sequelize");
const connection = require("../config/connection");

class ImageModel extends Model {}

ImageModel.init(
  {
    imageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Não defina references aqui! Isso será tratado no associations.js
    },
  },
  {
    sequelize: connection,
    tableName: "images",
    timestamps: false,
  }
);

// Não adicione associações aqui! Elas serão feitas no associations.js
module.exports = ImageModel; // Exporte apenas o modelo limpo
