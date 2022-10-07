import React from 'react';
import '../assets/style.css';
import Container from 'react-bootstrap/Container';

function Header() {
  return (
    <Container className='heading'>
      <h1>Jason South</h1>
      <span>
        <p className='title'>Full Stack Web Developer</p>
      </span>

    </Container>
  );
}

export default Header;