import React from "react";
import { Component } from "react";

import './app.css';
import BuscarCotacoes from "../containers/buscar_cotacoes";
import DetalhesCotacao from "../containers/detalhes_cotacao.js";
import DetalhesEmpresa from "../containers/detalhes_empresa.js";
import GraficoCotacao from "../containers/grafico_cotacao";

import { Container } from 'reactstrap';


export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <Container className="app-padding">
            <BuscarCotacoes />
            <DetalhesCotacao />
            <DetalhesEmpresa />
            <GraficoCotacao />
          </Container>
        </div>
      </div>
    );
  }
}
