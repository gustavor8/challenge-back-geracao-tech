const ProductModel = require("../models/ProductModel");

class ProductController {
  async getAll(request, response) {
    try {
      const data = await ProductModel.findAll();
      return response.json(data);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }

  create(request, response) {
    let data = request.body;
  }
}
module.exports = ProductController;
