import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends React.Component {
  constructor(){
    super();
    this.name = 'Saraswati Saud';
  }

  render() {
    return(
      <div className='foo'>
        <p>Hello {this.name}</p>
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))
