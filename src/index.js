import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import Test from './components/Test';
import './index.css';

class TodoList extends React.Component {
  constructor() {
    super();
    this.changeStatus = this.changeStatus.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addTask = this.addTask.bind(this);
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
      ],
      currentTask: ''
    }
  }

  updateTask(newValue) {
    this.setState({
      currentTask: newValue.target.value
    })
  }

  addTask(event) {
    event.preventDefault(); // Will not take the browser to the new URL
    let tasks = this.state.tasks;
    let currentTask = this.state.currentTask;
    tasks.push({
      name: currentTask,
      completed: false
    })
    this.setState({
      tasks
    })
  }

  changeStatus(index) {
    var tasks = this.state.tasks;
    var task = tasks[index];
    task.completed = !task.completed;
    this.setState({
      tasks
    })
  }

  render() {
    return(
      <div>
        <TodoForm currentTask={this.state.currentTask}
                  updateTask={this.updateTask}
                  addTask={this.addTask}
        />
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
