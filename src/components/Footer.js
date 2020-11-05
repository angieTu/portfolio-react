import React from "react";
import Container from "./primitives/Container";
import List from "./primitives/List";
import ListItem from "./primitives/ListItem";
import Span from "./primitives/Span";
import Link from "./primitives/Link";

import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { ImEnvelop } from "react-icons/im";

const Footer = () => {
  const yearCopyright = new Date().getFullYear();

  return (
    <>
      <Container as="footer" className="footer">
        <List className="footer-list">
          <ListItem className="footer-list-item">
            <Link
              href="https://github.com/angieTu"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub className="icon-github" /> /angieTu
            </Link>
          </ListItem>
          <ListItem className="footer-list-item">
            <Link
              href="https://www.linkedin.com/in/angie-tu/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin className="icon-linkedin" /> /angie-tu
            </Link>
          </ListItem>
          <ListItem className="footer-list-item">
            <Link href="mailto:angie.tur@gmail.com">
              <ImEnvelop className="icon-mail" /> angie.tur@gmail.com
            </Link>
          </ListItem>
        </List>
        <Span> © {yearCopyright} - Todos los derechos reservados </Span>
      </Container>
    </>
  );
};

export default Footer;
