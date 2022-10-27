import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Details = () => {
    const allnews = useLoaderData();
    const {title, image, details, instructor, total_student,} = allnews;
    return (
        <Card >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Name: {title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
        
        
          <ListGroup.Item>Instructor: {instructor}</ListGroup.Item>
          <ListGroup.Item>Student: {total_student}</ListGroup.Item>
          <Link>
            
          </Link>
        
        </Card.Body>
      </Card>
    );
};

export default Details;