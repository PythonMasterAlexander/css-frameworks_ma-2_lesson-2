import React from 'react';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function CardSection(props) {
  return(
    <>
      <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{props.content}</Card.Title>
            <Card.Text>
              Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi,
              a rutrum justo eros pretium libero.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CardSection;