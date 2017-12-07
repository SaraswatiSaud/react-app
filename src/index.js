import React from 'react';
import ReactDOM from 'react-dom';
import Test from './Test';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [{
        name: 'Buy milk',
        completed: false
      },
      {
        name: 'Buy Bread',
        completed: false
      },
      {
        name: 'Buy Cheese',
        completed: false
      }]
    }
  }

  render() {
    return(
      <div>
        <ul>
          {
            this.state.tasks.map(function(task) {
              return <ListItems key={task.name} details={task.name} />
            })
          }
        </ul>
        <Test />
      </div>
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
