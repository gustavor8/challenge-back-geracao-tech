const connection = require("../config/connection");

require("../models/associations");

// 3. Sincroniza o banco de dados
connection
  .sync({ alter: true })
  .then(() => console.log("Banco sincronizado com sucesso!"))
  .catch((err) => console.error("Erro ao sincronizar:", err));
