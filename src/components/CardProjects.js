import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";
import Link from "./primitives/Link";
import Span from "./primitives/Span";
import Img from "./primitives/Img";
import BtnRepo from "./BtnRepo";

const CardProjects = ({ href, src, title, tec, repo }) => {
  return (
    <Container as="article" className="project-box">
      <Container className="img-container">
        <Link href={href} target="_blank" rel="noreferrer">
          <Img className="img-project" src={src} alt={title} />
        </Link>
      </Container>
      <Container className="info-container">
        <Container>
          <Heading level="3">{title}</Heading>
          <Span>{tec}</Span>
        </Container>

        <BtnRepo repo={repo} />
      </Container>
    </Container>
  );
};

export default CardProjects;
