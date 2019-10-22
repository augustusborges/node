const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
    console.log("Servidor iniciado em 3333");
    return res.json({ message: "Projeto Iniciado" });
});

routes.get("/users", (req, res) => {
    console.log("entrei aqui");
});

module.exports = routes;
