const UsuarioModel = require("../controllers/ProductModel");

class ProductController {
  findAll() {
    const usuarioModel = new UsuarioModel();
    return usuarioModel.findAll();
  }
  findId(id) {
    const usuarioModel = new UsuarioModel();
    return usuarioModel.findId();
  }
  delete(id) {
    const usuarioModel = new UsuarioModel();
    return usuarioModel.delete();
  }
  update(id) {
    const usuarioModel = new UsuarioModel();
    return usuarioModel.update();
  }
  create() {
    const usuarioModel = new UsuarioModel();
    return usuarioModel.create();
  }
}
module.exports = ProductsController;
