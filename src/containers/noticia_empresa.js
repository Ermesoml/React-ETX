import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from 'reactstrap';
import * as moment from 'moment';

class NoticiaEmpresa extends Component {
  renderNoticiaEmpresa(noticia) {
    if (noticia == undefined){
      return;
    }

    return (
      <div>
        <h2>Última notícia</h2>
        <Table bordered key={noticia.symbol}>
          <tbody>
            <tr>
              <td>{moment(noticia.datetime).format('DD/MM/YYYY')}</td>
            </tr>
            <tr>
              <td>{noticia.headline}</td>
            </tr>
            <tr>
              <td>{noticia.source}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.noticia.map(this.renderNoticiaEmpresa)}
      </div>
    );
  }
}

function mapStateToProps({ noticia }) {
  return { noticia };
}

export default connect(mapStateToProps)(NoticiaEmpresa);
