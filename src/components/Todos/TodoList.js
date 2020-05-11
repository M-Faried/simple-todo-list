import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return todos.map((todoItem) => (
    <TodoItem key={todoItem.id} todo={todoItem} />
  ));
};

export default TodoList;
