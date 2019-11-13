import React, { Component } from "react";
import api from "../../servicos/api";
import "./style.css";

export default class Main extends Component {
  state = { produtos: [], produtoInfo: {}, pagina: 1 };

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

        <div className="acoes">
          <button onClick={this.prevPage}>Anterior</button>
          <button onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    );
  }

  loadProdutos = async (pagina = 1) => {
    const response = await api.get("/produtos?page=" + pagina);
    const { docs, ...produtoInfo } = response.data;
    this.setState({ produtos: docs, produtoInfo, pagina });
  };

  prevPage = () => {
    const { pagina, produtoInfo } = this.state;
    if (pagina === 1) {
      return;
    }

    const numPagina = pagina - 1;
    this.loadProdutos(numPagina);
  };

  nextPage = () => {
    const { pagina, produtoInfo } = this.state;
    console.log(produtoInfo.pages);
    console.log(pagina);
    if (pagina === produtoInfo.pages) {
      return;
    }

    const numPagina = pagina + 1;
    console.log(numPagina);
    this.loadProdutos(numPagina);
  };
}
