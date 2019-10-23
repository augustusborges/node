const mongoose = require("mongoose");
const Produto = mongoose.model("Produto");
var logger = require("logger").createLogger("server.log");

module.exports = {
    async index(req, res) {
        logger.info("Index :: " + req.originalUrl);

        const produtos = await Produto.find();
        return res.json(produtos);
    },

    async criar(req, res) {
        logger.info("Criar :: " + req.body);
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },

    async buscar(req, res) {
        logger.info("Editar :: " + req.params.id);
        const produto = await Produto.findById(req.params.id);
        return res.json(produto);
    }
};
