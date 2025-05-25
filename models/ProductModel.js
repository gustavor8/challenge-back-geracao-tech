const { DataTypes, Model } = require("sequelize");
const connection = require("../config/connection");

class ProductModel extends Model {}

ProductModel.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    assessment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    realPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    descontedPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    // modelName: "ProductModel",
    tableName: "products",
    timestamps: false,
  }
);

module.exports = ProductModel;
