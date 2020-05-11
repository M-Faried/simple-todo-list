import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { TodosContextProvider } from './components/context/TodosContext';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <TodosContextProvider>
        <Router>
          <div className='App'>
            <div className='container'>
              <Header />
              <Redirect from='/' to='/todo-list' />
              {/* The route to the about page */}
              <Route excat path='/todo-list/about' component={About} />
              {/* The Route to the todos page */}
              <Route exact path='/todo-list' component={Home} />
            </div>
          </div>
        </Router>
      </TodosContextProvider>
    );
  }
}

export default App;
