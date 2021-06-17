import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";

import CardProjects from "./CardProjects";

import movieApp from "../images/movieapp.jpg";
import marvelApp from "../images/appMarvel.jpg";
import travelBook from "../images/travelbook.jpg";
import sliders from "../images/sliders.jpg";
import ecualizador from "../images/ecualizador.jpg";
import layoutTP from "../images/layoutTP.jpg";
import apifriends from "../images/APIFriends.jpg";

const Projects = () => {
  return (
    <>
      <Container as="section" className="projects" name="projects">
        <Heading className="projects-title">Proyectos</Heading>
        <Container className="projects-container">
          <CardProjects
            href="https://theadamovie.netlify.app/"
            src={movieApp}
            title="The Ada Movie App"
            tec="HTML - Sass - React"
          />
          <CardProjects
            href="https://appmarvel.netlify.app/"
            src={marvelApp}
            title="App Marvel"
            tec="React"
          />
          <CardProjects
            href="https://documenter.getpostman.com/view/12618304/TW6wJoZQ"
            src={apifriends}
            title="API Friends"
            tec="Node.js - MongoDB"
          />
          <CardProjects
            href="https://photostravel.netlify.app/"
            src={travelBook}
            title="Travel"
            tec="HTML - CSS"
          />
          <CardProjects
            href="https://sliderstp.netlify.app/"
            src={sliders}
            title="Sliders"
            tec="HTML - Sass"
          />
          <CardProjects
            href="https://ecualizadortp.netlify.app/"
            src={ecualizador}
            title="Ecualizador"
            tec="HTML - Sass"
          />
          <CardProjects
            href="https://layouttp.netlify.app/"
            src={layoutTP}
            title="Landing Corporate"
            tec="HTML - Sass"
          />
        </Container>
      </Container>
    </>
  );
};

export default Projects;
