const mongoose = require("mongoose");
const Produto = mongoose.model("Produto");
var logger = require("logger").createLogger("server.log");

module.exports = {
    async listar(req, res) {
        logger.info("Index :: " + req.originalUrl);
        const { page = 1 } = req.query;
        const produtos = await Produto.paginate({}, { page, limit: 3 });
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
    },

    async editar(req, res) {
        logger.info("Editar :: " + req.params.id);
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(produto);
    },

    async deletar(req, res) {
        logger.info("Editar :: " + req.params.id);
        const produto = await Produto.findByIdAndRemove(req.params.id);
        return res.send();
    }
};
