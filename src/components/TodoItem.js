import React from 'react';

const TodoItem = (props) => {
  return(
    <li onClick={ () => {props.clickHandler(props.index); }}
        className={props.details.completed ? 'completed' : ''}>
        {props.details.name}
        <button onClick={ (event) => {
          event.stopPropagation();  // to remove bounce to the li tag
          props.deleteTask(props.index)
        }}>Delete</button>
    </li>
  )
}

export default TodoItem;
