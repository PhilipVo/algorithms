import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import CaretLeft from 'react-icons/lib/fa/caret-left';

import './index.css';

import Algorithms from './components/Algorithms';
import Home from './components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caretClass: "caret-class-left"
    };
  }

  toggle = () => {
    this.setState({caretClass: this.state.caretClass === "caret-class-left" ? "caret-class-right" : "caret-class-left" })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav className="App-nav">
            <Link to="/">Home</Link>
            <Link to="/algorithms">Algorithms</Link>
          </nav>
    
          <div className="App-routes">
            <CaretLeft className="Caret-Left" onClick={this.toggle} />
            <Route exact path="/" component={Home} />
            <Route path="/algorithms" component={Algorithms} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
