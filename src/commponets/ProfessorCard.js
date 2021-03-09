import React from 'react'
import { Card } from 'react-bootstrap'


export default function ProfessorCard({ Name, Img, Sub }){
  // const [onMouse, setOnMouse] = useState(true);

  return (
    <Card className="bg-dark text-white" style={{ width: '45rem' }}>
      <Card.Img variant="top" src={ Img } alt=""/>
        <Card.Body>
          <Card.Title><h1>{ Name }</h1></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ Sub }</Card.Subtitle>
          <Card.Text> 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
