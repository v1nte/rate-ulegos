import React from 'react'
import ProfessorCard from "./ProfessorCard";
import { Container } from "react-bootstrap"


export default function App() {
  const ImgDir = "/images/Professors/";
  return (
    <Container className="align-items-center d-flex">
      <ProfessorCard Name="Toel Jorres" Sub="Machin lerni" Img={ ImgDir+"Toel.jpg" } />
      <ProfessorCard Name="Raulin" Sub="XD" Img={ ImgDir+"Raul.jpg" }/>
      <ProfessorCard Name="Epson" Sub="Impresora" Img={ ImgDir+"Epson.jpg" }/>
      <ProfessorCard Name="Vristhian" Sub="Nuevo Jefazo" Img={ ImgDir+"Vristhian.jpg" } />
    </Container>
  )
}

