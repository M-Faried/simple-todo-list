import React, { Component } from 'react';
import * as uuid from 'uuid';

import AddTodo from '../AddTodo';
import TodoGroup from '../TodoGroup';
import Footer from '../layout/Footer';

const LS_APP_KEY = 'react-todo-list-data';
const SAMPLE_DATA = [
  { id: uuid.v4(), title: 'Take out the trash', completed: false },
  { id: uuid.v4(), title: 'Doing Dishes', completed: false },
  { id: uuid.v4(), title: 'Reading the next chapter', completed: false },
];

export default class TodoList extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const savedData = JSON.parse(localStorage.getItem(LS_APP_KEY));
    if (savedData) {
      savedData.sort((a, b) => a.completed - b.completed);
      this.setState({ todos: savedData });
    } else {
      this.setState({ todos: SAMPLE_DATA });
    }
  }

  updateSavedData = (todos) => {
    localStorage.setItem(LS_APP_KEY, JSON.stringify(todos));
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

  toggleChecked = (id) => {
    //Updating the to do checked and sorting the list by completed state.
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

  render() {
    return (
      <React.Fragment>
        <AddTodo addTodo={this.addTodo} />
        <TodoGroup
          todos={this.state.todos}
          toggleChecked={this.toggleChecked}
          deleteTodo={this.deleteTodo}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
