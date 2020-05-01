import React from 'react';

export default function About() {
  return (
    <div style={aboutStyle}>
      <h1>About</h1>
      <p>
        This is a demo application developed using React font end framework. It
        uses local storage for saving TODOs
      </p>

      <p style={{ textAlign: 'center' }}>
        <a
          href='mailto:m.a.faried@gmail.com'
          target='_blank'
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          Contact Developer: m.a.faried@gmail.com
        </a>
      </p>
    </div>
  );
}

const aboutStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  color: 'white',
  borderRadius: '15px',
  minHeight: '300px',
  padding: '20px',
};
