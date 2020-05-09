import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to='/simple-todo-list/home' style={linkStyle}>
        Home
      </Link>{' '}
      |{' '}
      <Link to='/simple-todo-list/about' style={linkStyle}>
        About
      </Link>
    </header>
  );
}

const headerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '50px',
  borderRadius: '15px',
};

const linkStyle = {
  color: 'white',
};
