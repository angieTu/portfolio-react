import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";

import CardProjects from "./CardProjects";

import movieApp from "../images/movieapp.jpg";
import marvelApp from "../images/appMarvel.jpg";
import travelBook from "../images/travelbook.jpg";
import ecualizador from "../images/ecualizador.jpg";
import apifriends from "../images/APIFriends.jpg";
import toDoApp from "../images/ToDoApp.jpg";
import cotizador from "../images/cotizador.jpg";
import tiendaapple from "../images/tiendaapple.png";

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
            tec="React - Sass"
          />
          <CardProjects
            href="https://documenter.getpostman.com/view/12618304/TW6wJoZQ"
            src={apifriends}
            title="API Friends"
            tec="Node.js - MongoDB"
          />
          <CardProjects
            href="https://angietu.github.io/Cotizador/"
            src={cotizador}
            title="Cotizador de servicios"
            tec="JavaScript - Sass"
          />{" "}
          <CardProjects
            href="https://tiendaapple.netlify.app/"
            src={tiendaapple}
            title="Tienda Apple (En Construcción)"
            tec="React - Sass - Firebase"
          />
          <CardProjects
            href="https://todoappangie.netlify.app/"
            src={toDoApp}
            title="To Do App"
            tec="React - Sass"
          />{" "}
          <CardProjects
            href="https://photostravel.netlify.app/"
            src={travelBook}
            title="Travel"
            tec="HTML - CSS"
          />
          <CardProjects
            href="https://ecualizadortp.netlify.app/"
            src={ecualizador}
            title="Ecualizador"
            tec="HTML - Sass"
          />
        </Container>
      </Container>
    </>
  );
};

export default Projects;
