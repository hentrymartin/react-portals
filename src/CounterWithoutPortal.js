import React, { Component } from 'react';

class CounterWithoutPortal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        The count is {this.state.count}
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default CounterWithoutPortal;
