import React, { Component } from 'react';

import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import { bindActionCreators } from "redux";
import { fetchCotacoes } from "../actions/cotacoes";
import { fetchEmpresa } from "../actions/empresas";
import { fetchGrafico } from "../actions/graficos";
import { connect } from "react-redux";

class BuscarCotacoes extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      simbolo: "", 
      simboloPesquisado: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.iniciarBusca = this.iniciarBusca.bind(this);
  }

  onInputChange(event) {
    this.setState({ simbolo: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({simboloPesquisado: this.state.simbolo}, () => {
      this.iniciarBusca()
    })

    // this.iniciarBusca();
  }

  buscarCotacoes(){
    this.props.fetchCotacoes(this.state.simboloPesquisado);
    this.props.fetchEmpresa(this.state.simboloPesquisado);
    this.props.fetchGrafico(this.state.simboloPesquisado);
  }

  iniciarBusca(){
    this.props.fetchCotacoes(this.state.simboloPesquisado);
    this.props.fetchEmpresa(this.state.simboloPesquisado);
    this.props.fetchGrafico(this.state.simboloPesquisado);
    
    setInterval(() => {
      this.props.fetchCotacoes(this.state.simboloPesquisado);
    }, 2000)
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit} className="mb-2">
        <FormGroup>
          <Label for="simbolo">Informe o símbolo da ação</Label>
          <Input type="text" id="simbolo" placeholder="Por ex.: FB" onChange={this.onInputChange} />
        </FormGroup>
        <Button>Pesquisar</Button>
      </Form>  
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCotacoes, fetchEmpresa, fetchGrafico }, dispatch);
}

export default  connect(null, mapDispatchToProps)(BuscarCotacoes);
