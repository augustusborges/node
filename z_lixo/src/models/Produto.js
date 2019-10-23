const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");

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

ProdutoSchema.plugin(paginate);

mongoose.model("Produto", ProdutoSchema);
