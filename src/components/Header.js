import React from "react";
import Container from "./primitives/Container";
import Nav from "./primitives/Nav";
import List from "./primitives/List";
import ListItem from "./primitives/ListItem";
import Span from "./primitives/Span";

import { Link } from "react-scroll";

import { FcGraduationCap } from "react-icons/fc";
import { FcOpenedFolder } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcPhoneAndroid } from "react-icons/fc";

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
                <Span>
                  Sobre mí
                  {/* <FcBusinesswoman className="icon-about" /> */}
                </Span>
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
                <Span>
                  Skills
                  {/* <FcGraduationCap className="icon-skills" /> */}
                </Span>
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
                <Span>
                  Proyectos
                  {/* <FcOpenedFolder className="icon-project" /> */}
                </Span>
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
                <Span>
                  Contacto
                  {/* <FcPhoneAndroid className="icon-contact" /> */}
                </Span>
              </Link>
            </ListItem>
          </List>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
