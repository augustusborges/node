import React, { Component } from "react";
import api from "../../servicos/api";

export default class Main extends Component {
    state = { produtos: [] };

    componentDidMount() {
        this.loadProdutos();
    }

    loadProdutos = async () => {
        const response = await api.get("/produtos");
        this.setState({ produtos: response.data.docs });
        console.log(response.data.docs);
    };

    render() {
        return <h1>Quantidade de produtos {this.state.produtos.length}</h1>;
    }
}
