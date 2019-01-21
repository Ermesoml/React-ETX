import React, { Component } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

class GraficoCotacao extends Component {

  render() {
    return (
      <div>
        {this.props.grafico.length > 0 &&
          <ResponsiveContainer width="100%" height={400} className="mb-2">
            <LineChart data={this.props.grafico}>
              <XAxis dataKey="label"/>
              <YAxis/>
              <Tooltip/>
              <Legend />
              <Line type="monotone" dataKey="close" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
    );
  }
}

function mapStateToProps({ grafico }) {
  return { grafico };
}

export default connect(mapStateToProps)(GraficoCotacao);
