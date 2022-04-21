import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Heading(props) {
  return(
    <>
      <Navbar expand="lg" variant="light" bg="primary">
        <Container>
          <Navbar.Brand href="#">{props.content}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Heading;
