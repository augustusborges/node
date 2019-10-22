const express = require("express");
var logger = require("logger").createLogger("server.log");
const rotas = express.Router();
const ProdutoController = require("./controllers/ProdutoController");

rotas.get("/produtos", ProdutoController.index);
rotas.post("/produtos", ProdutoController.criar);

rotas.get("/", (req, res) => {
    logger.info("info" + req.originalUrl);
    logger.error("erro" + req.originalUrl);
    res.send("Outra coisa qualquer");
});
module.exports = rotas;
