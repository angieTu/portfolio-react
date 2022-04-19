import React from "react";

import Container from "./primitives/Container";
import Heading from "./primitives/Heading";

import CardProjects from "./CardProjects";

import movieApp from "../images/movieapp.jpg";
import marvelApp from "../images/appMarvel.jpg";
import ecualizador from "../images/ecualizador.jpg";
import apifriends from "../images/APIFriends.jpg";
import toDoApp from "../images/ToDoApp.jpg";
import cotizador from "../images/cotizador.jpg";
import tiendaapple from "../images/tiendaapple.png";
import wenasports from "../images/wenasports.png";
import wordle from "../images/wordle.jpeg";

const Projects = () => {
  return (
    <>
      <Container as="section" className="projects" name="projects">
        <Heading className="projects-title">Proyectos</Heading>
        <Container className="projects-container">
          <CardProjects
            href="https://wenasportstest.netlify.app/"
            src={wenasports}
            title="Wena Sports"
            tec="React js - Sass"
            repo="https://github.com/angieTu/Wena_Sports"
          />
          <CardProjects
            href="https://theadamovie.netlify.app/"
            src={movieApp}
            title="The Ada Movie App"
            tec="HTML - Sass - React js"
            repo="https://github.com/angieTu/TP_Final"
          />
          <CardProjects
            href="https://appmarvel.netlify.app/"
            src={marvelApp}
            title="App Marvel"
            tec="React js - Sass"
            repo="https://github.com/angieTu/appMarvel"
          />
          <CardProjects
            src={wordle}
            title="Wordle App"
            tec="React Native - SQL - Redux"
            repo="https://github.com/angieTu/wordle-app"
          />
          <CardProjects
            href="https://documenter.getpostman.com/view/12618304/TW6wJoZQ"
            src={apifriends}
            title="API Friends"
            tec="Node.js - MongoDB"
            repo="https://github.com/angieTu/API-Friends"
          />
          <CardProjects
            href="https://angietu.github.io/Cotizador/"
            src={cotizador}
            title="Cotizador de servicios"
            tec="JavaScript - Sass"
            repo="https://github.com/angieTu/Cotizador"
          />
          <CardProjects
            href="https://tiendaapple.netlify.app/"
            src={tiendaapple}
            title="Tienda Apple"
            tec="React js - Sass - Firebase"
            repo="https://github.com/angieTu/apple-store"
          />
          <CardProjects
            href="https://todoappangie.netlify.app/"
            src={toDoApp}
            title="To Do App"
            tec="React js - Sass"
            repo="https://github.com/angieTu/To-Do-App"
          />
          <CardProjects
            href="https://ecualizadortp.netlify.app/"
            src={ecualizador}
            title="Ecualizador"
            tec="HTML - Sass"
            repo="https://github.com/angieTu/Ecualizador"
          />
        </Container>
      </Container>
    </>
  );
};

export default Projects;
