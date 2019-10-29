import React, { Component } from "react";
import api from "../../servicos/api";
import "./style.css";

export default class Main extends Component {
    state = { produtos: [] };

    componentDidMount() {
        this.loadProdutos();
    }

    render() {
        return (
            <div className="produto-lista">
                {this.state.produtos.map(produto => (
                    <article key={produto._id}>
                        <strong>{produto.titulo}</strong>
                        <p>{produto.isbn}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
            </div>
        );
    }

    loadProdutos = async () => {
        const response = await api.get("/produtos");
        this.setState({ produtos: response.data.docs });
        console.log(response.data.docs);
    };
}
