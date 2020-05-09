import React, { Component } from 'react';

export default class AddTodo extends Component {
  state = {
    title: '',
  };

  onTitleChange = (e) => {
    //Updating the state with the value of the text input
    this.setState({ title: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title) {
      //Calling the parent's add todo function.
      this.props.addTodo(this.state.title);
      //Clearing the text input
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
          onChange={this.onTitleChange}
        />

        <button type='submit' className='form-btn'>
          <i className='fas fa-plus-circle'></i>
        </button>
      </form>
    );
  }
}
