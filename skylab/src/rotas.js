const express = require("express");
const rotas = express.Router();

rotas.get("/", (req, res) => {
    return res.send("lixo eterno");
});

rotas.get("/users", (req, res) => {
    return res.json({ message: "Pagina Users Iniciado" });
});

module.exports = rotas;
