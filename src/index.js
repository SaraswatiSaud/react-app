import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      names: ['Pintoo', 'Chintoo', 'Mintoo']
    }
  }

  render() {
    return(
      <ul>
        {
          this.state.names.map(function(name) {
            return <ListItems details={name} />
          })
        }
      </ul>
    );
  }
}

class ListItems extends React.Component {
  render() {
    return(
      <li>{this.props.details}</li>
    );
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'))
