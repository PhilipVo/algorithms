import React, { Component } from 'react';

class Stacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1
    };
  }

  add = () => {
    this.setState({ size: this.state.size + 1 });
  }

  render() {
    let stacks = [];
    for (let i = this.state.size - 1; i >= 0; i--) {
      stacks.push(<p key={i} className="stack">S T A C K</p>)
    }

    return (
      <div style={{ flex: 1 }}>
        <button onClick={this.add}>+1</button>
        {stacks}
      </div>
    );
  }
}

export default Stacks;