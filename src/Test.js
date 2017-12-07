import React from 'react';
import './index.css';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      color: true,
      text: 'Click to change color'
    }
  }

  handleClick = () => {
    this.setState({
      color: !this.state.color,
      text: !this.state.color == true ? 'Click to get Green' : 'Click to get Red'
    })
  }

  render() {
    return (
      <div>
        <p className={this.state.color ? 'red' : 'green'}>Change the text color</p>
        <button onClick={this.handleClick}>{this.state.text}</button>
        <hr />
        <Increment />
      </div>
    );
  }
}

class Increment extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 1
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

  render() {
    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        <p>{this.state.value}</p>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Test;
