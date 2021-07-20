import React from "react";
import Container from "./primitives/Container";
import Nav from "./primitives/Nav";
import List from "./primitives/List";
import ListItem from "./primitives/ListItem";
import Span from "./primitives/Span";

import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <Container as="header" className="header">
        <Nav className="header-nav">
          <List className="header-nav-list">
            <ListItem className="header-nav-list-item">
              <Link
                delay={200}
                duration={500}
                spy={true}
                smooth={true}
                to="home"
              >
                <Span>Sobre mí</Span>
              </Link>
            </ListItem>
            <ListItem className="header-nav-list-item">
              <Link
                delay={200}
                duration={500}
                spy={true}
                smooth={true}
                to="projects"
              >
                <Span>Proyectos</Span>
              </Link>
            </ListItem>
            <ListItem className="header-nav-list-item">
              <Link
                delay={200}
                duration={500}
                spy={true}
                smooth={true}
                to="skills"
              >
                <Span>Skills</Span>
              </Link>
            </ListItem>

            <ListItem className="header-nav-list-item">
              <Link
                delay={200}
                duration={500}
                spy={true}
                smooth={true}
                to="form"
              >
                <Span>Contacto</Span>
              </Link>
            </ListItem>
          </List>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
