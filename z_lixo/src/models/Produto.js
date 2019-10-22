const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    isbn: {
        type: String
    },
    edicao: {
        type: String
    },
    criacao: {
        type: Date,
        default: Date.now
    }
});

mongoose.model("Produto", ProdutoSchema);
