import React from 'react';
// import './index.css';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 1,
      color: true,
      text: 'Click to change color'
    }
  }
  increment = () => {
    this.setState({
      value: this.state.value + 1
    })
  }
  decrement = () => {
    this.setState({
      value: this.state.value - 1
    })
  }
  handleClick = () => {
    this.setState({
      color: !this.state.color,
      text: this.state.color === true ? 'Click green' : 'Click red'
    })
  }

  render() {
      return(
        <div>
          <button onClick={this.increment}>Increment</button>
          <p>{this.state.value}</p>
          <button onClick={this.decrement}>Decrement</button>
          <hr />
          <p className={this.state.color === true ? 'red' : 'green'}>Change the color</p>
          <button onClick={this.handleClick}>{this.state.text}</button>
        </div>
      )
  }
}

export default Test;
