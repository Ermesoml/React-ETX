import React, { Component } from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem } from 'reactstrap';

class DestalhesCotacao extends Component {
  renderDetalhesCotacao(cotacao) {
    return (
      <ListGroup key={cotacao.quote.symbol} className="mb-2">
        <ListGroupItem color={cotacao.quote.changePercent >= 0 ? 'success' : 'danger'}>Último preço: US$ {cotacao.quote.latestPrice} ({cotacao.quote.changePercent >= 0 ? '+' : ''}{cotacao.quote.changePercent * 100}%)</ListGroupItem>
      </ListGroup>
    )
  }

  render() {
    return (
      <div>
        {this.props.cotacao.map(this.renderDetalhesCotacao)}
      </div>
    );
  }
}

function mapStateToProps({ cotacao }) {
  return { cotacao };
}

export default connect(mapStateToProps)(DestalhesCotacao);
