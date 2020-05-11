import React from 'react';

import AddTodo from '../Todos/AddTodo';
import TodoList from '../Todos/TodoList';
import Footer from '../layout/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <AddTodo />
      <TodoList />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
