import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from './components/layout/Header';
import TodoList from './components/pages/TodoList';
import About from './components/pages/About';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Router>
            <Header />

            <Redirect from='/' to='/simple-todo-list' />

            {/* The Route to the todos page */}
            <Route exact path='/simple-todo-list' component={TodoList} />

            {/* The route to the about page */}
            <Route path='/simple-todo-list/about' component={About} />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
