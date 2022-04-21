import React from 'react';
import './scss/style.scss';
import Heading from './components/Heading';
import UserDatabase from './components/Users';
import Footer from './components/Footer';
import CardSection from './components/CardSection';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabContainer from './components/Tab';
import UserMessage from './components/UserMessage';

function App() {
  return (
    <>
      <div className="page-wrapper">
      <Heading content="Admin" />
        <main>
          <h2>Users</h2>
          <UserDatabase />
          <h3>Features</h3>
          <Container>
            <Row>
              <Col>
                <CardSection content="Card 1" />
              </Col>
              <Col>
                <CardSection content="Card 2" />
              </Col>
              <Col>
                <CardSection content="Card 2" />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <h4>Submit a comment</h4>
                <UserMessage />
              </Col>
              <Col>
                <TabContainer />
              </Col>
            </Row>
          </Container>
        </main>
      </div>
      <Footer content="Copyright 2020" />
    </>
  );
}

export default App;
