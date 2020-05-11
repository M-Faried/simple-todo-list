import React, { useState, useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useContext(TodosContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title) {
      //Calling the parent's add todo function.
      addTodo(title);
      //Clearing the text input
      setTitle('');
    }
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', maxWidth: '100%' }}>
      <input
        type='text'
        name='title'
        className='form-input'
        placeholder='Add Todo...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type='submit' className='form-btn'>
        <i className='fas fa-plus-circle'></i>
      </button>
    </form>
  );
};

export default AddTodo;
