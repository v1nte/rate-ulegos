import React from 'react'
import ProfessorCard from "./ProfessorCard";
import { Container } from "react-bootstrap"


export default function App() {
  const ImgDir = "/images/Professors/";
  return (
    <Container className="align-items-center d-flex">
      <ProfessorCard Name="Toel Jorres" Img= {ImgDir+"Toel.jpg"} />
      <ProfessorCard Name="Raulin" Img= {ImgDir+"Raul.jpg"}/>
      <ProfessorCard Name="Epson" Img={ImgDir+"Epson.jpg"}/>
    </Container>
  )
}

