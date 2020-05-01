import React, { Component } from 'react';
import * as uuid from 'uuid';

import AddTodo from '../AddTodo';
import Todos from '../Todos';
import Footer from '../layout/Footer';
// const uuid = require('uuid');

const sampleData = [
  { id: uuid.v4(), title: 'Take out the trash', completed: false },
  { id: uuid.v4(), title: 'Doing Dishes', completed: false },
  { id: uuid.v4(), title: 'Reading the next chapter', completed: false },
];

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem('react-todo-list-data'));
    if (savedData) savedData.sort((a, b) => a.completed - b.completed);
    this.setState({ todos: savedData ? savedData : sampleData });
  }

  toggleChecked = (id) => {
    const updatedStateTodos = this.state.todos
      .map((item) => {
        if (item.id === id) item.completed = !item.completed;
        return item;
      })
      .sort((a, b) => a.completed - b.completed);

    this.setState({ todos: updatedStateTodos });
    this.updateSavedData(updatedStateTodos);
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((td) => td.id !== id);

    this.setState({ todos: newTodos });

    this.updateSavedData(newTodos);
  };

  addTodo = (title) => {
    const newTodos = this.state.todos;

    newTodos.unshift({
      id: uuid.v4(),
      title: title,
      completed: false,
    });

    this.setState({
      todos: newTodos,
    });

    this.updateSavedData(newTodos);
  };

  updateSavedData = (todos) => {
    localStorage.setItem('react-todo-list-data', JSON.stringify(todos));
  };

  render() {
    return (
      <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          toggleChecked={this.toggleChecked}
          deleteTodo={this.deleteTodo}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
