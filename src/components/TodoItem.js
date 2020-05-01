import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/TodoCheckbox.css';

export class TodoItem extends Component {
  getTitleStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div className='todo-item'>
        <label className='checkBoxContainer' style={{ display: 'inline' }}>
          <span style={this.getTitleStyle()}> {title}</span>
          <input
            type='checkbox'
            checked={completed}
            onChange={this.props.toggleChecked.bind(this, id)}
          />
          <span className='checkmark'></span>
        </label>

        <button
          onClick={this.props.deleteTodo.bind(this, id)}
          className='delete-btn'
        >
          <i className='fas fa-backspace'></i>
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
