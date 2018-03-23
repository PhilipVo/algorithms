import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Stacks from './Stacks';

class Algorithms extends Component {
  render() {
    return (
      <div className="container">
        <div className="container-header">
          <p className="header">Algorithms</p>
          <p>
            Here are my solutions to various Algorithm challenges visualized using React
            and CSS3 animations.
          </p>
        </div>
        
        <div className="container-body">
          <Link to={`${this.props.match.path}/stacks`}>
            Props v. State
          </Link>
          <Route exact path="/algorithms/stacks" component={Stacks} />
        </div>
      </div>
    );
  }
}

export default Algorithms;