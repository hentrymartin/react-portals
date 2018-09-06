import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('portal-root');

class CounterWithPortal extends Component {
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
    return ReactDOM.createPortal(
      <div>
        The count is {this.state.count}
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>,
      root,
    );
  }
}

export default CounterWithPortal;
