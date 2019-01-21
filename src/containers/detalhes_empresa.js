import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from 'reactstrap';

class DetalhesEmpresa extends Component {
  renderDetalhesEmpresa(empresa) {
    if (empresa == undefined){
      return;
    }

    return (
      <Table bordered className="text-left" key={empresa.symbol}>
        <tbody>
          <tr>
            <td>Empresa</td>
            <td>{empresa.companyName}</td>
          </tr>
          <tr>
            <td>Exchange</td>
            <td>{empresa.exchange}</td>
          </tr>
          <tr>
            <td>Indústria</td>
            <td>{empresa.industry}</td>
          </tr>
          <tr>
            <td>Setor</td>
            <td>{empresa.sector}</td>
          </tr>
          <tr>
            <td>CEO</td>
            <td>{empresa.CEO}</td>
          </tr>
          <tr>
            <td>Site</td>
            <td><a href={empresa.website}>{empresa.website}</a></td>
          </tr>
          <tr>
            <td>Descrições</td>
            <td>{empresa.description}</td>
          </tr>
        </tbody>
      </Table>
    )
  }

  render() {
    return (
      <div>
        {this.props.empresa.map(this.renderDetalhesEmpresa)}
      </div>
    );
  }
}

function mapStateToProps({ empresa }) {
  return { empresa };
}

export default connect(mapStateToProps)(DetalhesEmpresa);
