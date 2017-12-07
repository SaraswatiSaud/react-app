import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return(
      <h1>Hello</h1>
    );
  }
}

class World extends React.Component {
  render() {
    return(
      <p>World</p>
    );
  }
}

class HelloWorld extends React.Component {
  render() {
    return(
      <div>
        <Hello />
        <World />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))
