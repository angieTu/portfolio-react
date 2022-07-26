import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";
import Paragraph from "./primitives/Paragraph";
import Span from "./primitives/Span";
import Button from "./primitives/Button";
import Link from "./primitives/Link";

import cv from "../AngeletteTurne.pdf";
// dax
const Main = () => {
  return (
    <>
      <Container as="main" className="about" name="home">
        <Heading className="about-title">
          Hola<Span>!</Span> Mi nombre es <Span>Angie</Span>.
          <br />
          Frontend Developer
        </Heading>
        <Container as="section">
          <Container className="skewed" />
        </Container>
        <Paragraph className="about-info"></Paragraph>
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
