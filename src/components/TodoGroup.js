import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoGroup extends Component {
  render() {
    return this.props.todos.map((todoItem) => (
      <TodoItem
        key={todoItem.id}
        todo={todoItem}
        toggleChecked={this.props.toggleChecked}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

TodoGroup.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TodoGroup;
