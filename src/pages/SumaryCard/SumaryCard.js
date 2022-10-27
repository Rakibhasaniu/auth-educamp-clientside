import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const SumaryCard = ({news}) => {
    return (
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={news.image} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>
         {news.details}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{news.instructor}</ListGroup.Item>
        <ListGroup.Item>{news.total_student}</ListGroup.Item>
        <ListGroup.Item>{news.rating.number}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    );
};

export default SumaryCard;