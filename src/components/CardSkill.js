import React from "react";

import Container from "../components/primitives/Container";
import Img from "../components/primitives/Img";
import Span from "../components/primitives/Span";

const CardSkill = ({ src, title }) => {
  return (
    <Container className="skill-box">
      <Img src={src} alt={title.toLowerCase()} />
      <Span>{title}</Span>
    </Container>
  );
};

export default CardSkill;
