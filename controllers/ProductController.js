//tive que exportar atyravés da associação porque tava dando erro
const { ProductModel, ImageModel } = require("../models/associations");

class ProductController {
  // Search imgs
  async _getProductWithImages(productId) {
    return await ProductModel.findByPk(productId, {
      include: [{ model: ImageModel, as: "images" }],
    });
  }

  // Create a new product
  async create(request, response) {
    try {
      const { images, ...productData } = request.body;

      // Validate fields
      const requiredFields = [
        "title",
        "description",
        "model",
        "mark",
        "ref",
        "realPrice",
        "descontedPrice",
      ];
      const missingFields = requiredFields.filter(
        (field) => !productData[field]
      );

      if (missingFields.length > 0) {
        return response.status(400).json({
          missingFields,
          details: `Os seguintes campos são obrigatórios: ${missingFields.join(
            ", "
          )}`,
        });
      }

      // Create product
      const newProduct = await ProductModel.create({
        ...productData,
        assessment: productData.assessment || 0, // Valor padrão
      });

      // Associade img
      if (images && images.length > 0) {
        await ImageModel.bulkCreate(
          images.map((image) => ({
            url: image.url,
            productId: newProduct.productId,
          }))
        );
      }

      // Return prodcuts + images
      const productWithImages = await this._getProductWithImages(
        newProduct.productId
      );

      return response.status(201).json({
        message: "Produto criado com sucesso",
        data: productWithImages,
      });
    } catch (err) {
      console.error("Erro ao criar produto:", err);
      return response.status(500).json({
        error: "Erro interno no servidor",
        details: err.errors?.map((e) => e.message) || err.message,
      });
    }
  }

  // LList all Products + images
  async getAll(request, response) {
    try {
      const products = await ProductModel.findAll({
        include: [{ model: ImageModel, as: "images" }],
        order: [["productId", "DESC"]],
      });

      return response.json(products);
    } catch (err) {
      console.error("Erro ao buscar produtos:", err);
      return response.status(500).json({
        error: "Erro ao buscar produtos",
        details: err.message,
      });
    }
  }

  // Search product
  async getById(request, response) {
    try {
      const product = await this._getProductWithImages(request.params.id);

      if (!product) {
        return response.status(404).json({
          error: "Produto não localizado no Banco de Dados!",
        });
      }
      return response.json(product);
    } catch (err) {
      return response.status(500).json({
        error: "Erro ao buscar produto",
        details: err.message,
      });
    }
  }

  // Update Product
  async update(request, response) {
    try {
      const { id } = request.params;
      const { images, ...productData } = request.body;

      const [updated] = await ProductModel.update(productData, {
        where: { productId: id },
      });

      if (!updated) {
        return response.status(404).json({
          error: "Produto não encontrado",
        });
      }
      // Updating images
      if (images) {
        await ImageModel.destroy({ where: { productId: id } });
        await ImageModel.bulkCreate(
          images.map((image) => ({
            ...image,
            productId: id,
          }))
        );
      }
      const updatedProduct = await this._getProductWithImages(id);
      return response.json({
        message: "Produto atualizado com sucesso",
        data: updatedProduct,
      });
    } catch (err) {
      console.error("Erro ao atualizar produto: ", err);
      return response.status(500).json({
        error: "Erro ao atualizar produto!",
        details: err.message,
      });
    }
  }
  // delete product
  async delete(request, response) {
    try {
      const { id } = request.params;
      await ImageModel.destroy({ where: { productId: id } });
      const deleted = await ProductModel.destroy({ where: { productId: id } });

      if (!deleted) {
        return response.status(404).json({
          error: "Produto não encontrado",
        });
      }
      return response.json({
        message: "Produto removido com sucesso",
      });
    } catch (err) {
      console.error("Falha ao remover produto: ", err);
      return response.status(500).json({
        error: "falha ao remover produto!",
        details: err.message,
      });
    }
  }
}

module.exports = ProductController;
