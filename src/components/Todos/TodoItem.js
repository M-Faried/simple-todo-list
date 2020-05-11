import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import PropTypes from 'prop-types';

import '../../css/TodoCheckbox.css';

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;
  const { toggleChecked, deleteTodo } = useContext(TodosContext);
  const titleStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <div className='todo-item'>
      <label className='checkBoxContainer' style={{ display: 'inline' }}>
        <span style={titleStyle}> {title}</span>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => toggleChecked(id)}
        />
        <span className='checkmark'></span>
      </label>

      <button onClick={() => deleteTodo(id)} className='delete-btn'>
        <i className='fas fa-backspace'></i>
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
