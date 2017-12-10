import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem';
import Test from './components/Test';
import './index.css';

class TodoList extends React.Component {
  constructor() {
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.state = {
      tasks: [
        {
          name: 'Pintoo',
          completed: false
        },
        {
          name: 'Chintoo',
          completed: false
        },
        {
          name: 'Mintoo',
          completed: false
        }
      ]
    }
  }

  changeStatus(index) {
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return(
      <div>
        <p>Todo lists</p>
        <ul>
          {this.state.tasks.map((task, index) => {
            return <TodoItem key={task.name}
                             clickHandler={this.changeStatus}
                             index = {index}
                             details={task}
                    />
          })}
        </ul>
        <hr />
        <Test />
      </div>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'))
