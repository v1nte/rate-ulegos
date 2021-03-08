import React from 'react'
import { Card } from 'react-bootstrap'


export default function ProfessorCard({ Name, Img }){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{ Img }"/>
        <Card.Body>
          <Card.Title><h1>{ Name }</h1></Card.Title>
          <Card.Text> 
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</Card.Text>
        </Card.Body>
      </Card>
  );
}
