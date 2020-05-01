import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    title: '',
  };

  onTodoTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title) {
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ display: 'flex', maxWidth: '100%' }}
      >
        <input
          type='text'
          name='title'
          className='form-input'
          placeholder='Add Todo...'
          value={this.state.title}
          onChange={this.onTodoTitleChange}
        />

        <button type='submit' className='form-btn'>
          <i className='fas fa-plus-circle'></i>
        </button>
      </form>
    );
  }
}
