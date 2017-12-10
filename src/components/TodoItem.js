import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderForm = this.renderForm.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.updateItem = this.updateItem.bind(this);

    this.state = {
      isEditing: false
    }
  }

  updateItem(event) {
    event.preventDefault();
    this.props.editTask(this.props.index, this.props.value)
    this.toggleState();
  }

  renderForm() {
    return (
      <form onSubmit={this.updateItem}>
        <input type='text'
                ref={(value) => {this.input = value}}
                defaultValue={this.props.details.name} />
        <button type='submit'>Update Item</button>
      </form>
    )
  }

  toggleState() {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    })
  }

  renderItem() {
    return (
      <li onClick={ () => {this.props.clickHandler(this.props.index); }}
        className={this.props.details.completed ? 'completed' : ''}>
        {this.props.details.name}
        <button onClick={ (event) => {
          event.stopPropagation();  // to remove bounce to the li tag
          this.props.deleteTask(this.props.index)
        }}>Delete</button>
        <button onClick={ (event) => {
          event.stopPropagation();  // to remove bounce to the li tag
          this.toggleState()
        }}>Edit</button>
      </li>
    )
  }

  render () {
    const { isEditing } = this.state;

    return(
      <section>
        {
          isEditing ? this.renderForm() : this.renderItem()
        }
      </section>
    )
  }
}

export default TodoItem;
