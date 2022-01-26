import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";
import Paragraph from "./primitives/Paragraph";
import Span from "./primitives/Span";
import Button from "./primitives/Button";
import Link from "./primitives/Link";

import cv from "../CVAngeletteTurne.pdf";

const Main = () => {
  return (
    <>
      <Container as="main" className="about" name="home">
        <Heading className="about-title">
          Hola<Span>!</Span> Mi nombre es <Span>Angie</Span>
        </Heading>
        <Container as="section">
          <Container className="skewed" />
        </Container>
        <Paragraph className="about-info">
          Soy Lic. en Relaciones Públicas, pero en el último año incursioné en
          el mundo IT y estudié desarrollo frontend. Actualmente me estoy
          formando para ser desarrolladora fullstack. 💻 Trabajo haciendo closed
          caption, y algunos proyectos freelance de desarrollo web.
        </Paragraph>
        <Button>
          <Link href={cv} download="curriculum">
            DESCARGAR CV
          </Link>
        </Button>
        {/* <Img className="about-img" src={myselfImg} alt="" /> */}
      </Container>
    </>
  );
};

export default Main;
