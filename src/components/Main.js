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
        <Heading className="about-title">Angie Turne</Heading>
        <Paragraph className="about-info">
          Frontend Developer - Closed Captioner - Lic. En Relaciones Públicas
        </Paragraph>
        <Paragraph className="about-info">Humana de Muralito</Paragraph>
        <Img className="about-img" src={myselfImg} alt="" />
      </Container>
    </>
  );
};

export default Main;
