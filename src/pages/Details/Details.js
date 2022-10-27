import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaDownload, FaJsSquare, IconName } from "react-icons/fa";
import jsPDF from 'jspdf';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Details = () => {
    const allnews = useLoaderData();
    const {title, image, details, instructor, total_student,} = allnews;


    const pdfGenerate = () => {

      console.log("inside pdf")
      var doc = new jsPDF('landscape', 'px', 'a4', 'false');
      doc.addImage(image, 'JPEG', 0, 20, 80, 80);
      doc.setFont('Helvertica', 'bold')
      // doc.addPage()
      doc.text(20, 20, "Name : " + title, )
      doc.text(20, 30, "Details information : " + details,)
      doc.save('file.pdf')
  }
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
          <button onClick={pdfGenerate} title="Open options" type="button" className='hover:dark:text-violet-400'>
                            <span className='flex align-middle'><p className='mr-1'>Download Pdf</p> <FaDownload className='mt-1 ml-1'></FaDownload></span>
                        </button>
          </Link>
        
        </Card.Body>
      </Card>
    );
};

export default Details;