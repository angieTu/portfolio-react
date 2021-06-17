import React from "react";

import CardSkill from "./CardSkill";

import Container from "../components/primitives/Container";
import Heading from "../components/primitives/Heading";

import reactImg from "../images/react.png";
import sassImg from "../images/sass.png";
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import bootstrapImg from "../images/bootstrap.png";
import firebaseImg from "../images/firebase.png";
import gitImg from "../images/git.png";
import jsImg from "../images/js.png";
import responsiveImg from "../images/responsive.png";
import nodeImg from "../images/node.png";

const Skills = () => {
  return (
    <Container name="skills">
      <Container as="section" className="skills">
        <Heading className="skills-title">Skills</Heading>
        <Container className="container-skills">
          <CardSkill src={reactImg} title="React" />
          <CardSkill src={sassImg} title="Sass" />
          <CardSkill src={htmlImg} title="HTML" />
          <CardSkill src={cssImg} title="CSS" />
          <CardSkill src={bootstrapImg} title="Bootstrap" />
          <CardSkill src={firebaseImg} title="Firebase" />
          <CardSkill src={gitImg} title="Git" />
          <CardSkill src={jsImg} title="JavaScript" />
          <CardSkill src={responsiveImg} title="Responsive" />
          <CardSkill src={nodeImg} title="Node.js" />
        </Container>
      </Container>
    </Container>
  );
};

export default Skills;
