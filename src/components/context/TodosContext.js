import React, { createContext, useState } from 'react';
import * as uuid from 'uuid';

export const TodosContext = createContext();

export const TodosContextProvider = (props) => {
  const [todos, setTodos] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  //Adds a todo to the list
  const addTodo = (title) => {
    const item = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    const newTodos = [item, ...todos];
    setTodos(newTodos);
    updateSavedData(newTodos);
  };

  //Inverts the checked/completed state of the todo.
  const toggleChecked = (id) => {
    const newTodos = todos
      .map((item) => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      })
      .sort((a, b) => a.completed - b.completed);
    setTodos(newTodos);
    updateSavedData(newTodos);
  };

  //Deletes the todo.
  const deleteTodo = (id) => {
    const newTodos = todos.filter((td) => td.id !== id);
    setTodos(newTodos);
    updateSavedData(newTodos);
  };

  if (!dataLoaded) {
    const savedData = getSavedData();
    setTodos(savedData);
    setDataLoaded(true);
  }

  const providerValue = {
    todos,
    addTodo,
    toggleChecked,
    deleteTodo,
  };

  return (
    <TodosContext.Provider value={providerValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

////////////////////////////////////Helpers

const LS_APP_KEY = 'react-todo-list-data';

const SAMPLE_DATA = [
  { id: uuid.v4(), title: 'Take out the trash', completed: false },
  { id: uuid.v4(), title: 'Doing Dishes', completed: false },
  { id: uuid.v4(), title: 'Reading the next chapter', completed: false },
];

const updateSavedData = (todos) => {
  localStorage.setItem(LS_APP_KEY, JSON.stringify(todos));
};

const getSavedData = () => {
  const savedData = JSON.parse(localStorage.getItem(LS_APP_KEY));
  if (savedData) {
    savedData.sort((a, b) => a.completed - b.completed);
    return savedData;
  } else {
    return SAMPLE_DATA;
  }
};
