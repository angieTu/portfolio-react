import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";
import Paragraph from "./primitives/Paragraph";
import Img from "./primitives/Img";

import myselfImg from "../images/myself2.jpg";

const Main = () => {
  return (
    <>
      <Container as="main" className="about" name="home">
        <Heading className="about-title">Hola! Mi nombre es Angie</Heading>
        <Paragraph className="about-info">
        Soy Lic. en Relaciones Públicas, pero en el último año incursioné en el mundo IT y estudié desarrollo frontend. Actualmente me estoy formando para ser desarrolladora fullstack.
      💻 Trabajo haciendo closed caption, y algunos proyectos freelance de desarrollo web.
        </Paragraph>
        <Img className="about-img" src={myselfImg} alt="" />
      </Container>
    </>
  );
};

export default Main;
