import React from "react";

import Container from "../components/primitives/Container";
import Heading from "../components/primitives/Heading";
import Img from "../components/primitives/Img";
import Form from "../components/primitives/Form";
import Input from "../components/primitives/Input";
import Label from "../components/primitives/Label";
import Select from "../components/primitives/Select";
import Option from "../components/primitives/Option";
import Legend from "../components/primitives/Legend";
import Fieldset from "../components/primitives/Fieldset";
import Textarea from "../components/primitives/Textarea";
import Button from "../components/primitives/Button";

import myselfImg from "../images/myself.jpg";

const Contact = () => {
  return (
    <Container>
      <Container as="section" className="form" name="form">
        <Heading className="form-title">Contacto</Heading>
        <Container className="form-container">
          <Container className="form-img-container">
            <Img className="form-img" src={myselfImg} alt="" />
          </Container>
          <Form
            action="https://formsubmit.co/angie.tur@gmail.com"
            method="POST"
          >
            <Container className="form-complete">
              <Label for="name">Nombre</Label>
              <Container className="name">
                <Input
                  type="text"
                  id="name"
                  name="username"
                  placeholder="Ingrese su nombre"
                  minlength="5"
                  required
                />
                <i className="icon-user fas fa-user"></i>
              </Container>
              <Label for="email">Dirección de email</Label>
              <Container className="email">
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@email.com"
                  required
                />
                <i className="far fa-envelope icon-email"></i>
              </Container>
            </Container>
            <Container className="form-options">
              <Label for="know">¿Cómo me conociste?</Label>
              <Select name="know" id="know">
                <Option value="linkedin">Linkedin</Option>
                <Option value="twitter">Twitter</Option>
                <Option value="facebook">Facebook</Option>
                <Option value="referidos">Referidos</Option>
                <Option value="otros">Otros</Option>
              </Select>
            </Container>
            <Fieldset>
              <Legend>Motivo</Legend>
              <Input type="radio" name="motivo" id="motivo" />
              <Label for="motivo">Propuesta de trabajo</Label>
              <Input type="radio" name="motivo" id="motivo" />
              <Label for="motivo">Consulta</Label>
              <Input type="radio" name="motivo" id="motivo" />
              <Label for="motivo">Otro</Label>
            </Fieldset>
            <Container className="message">
              <Legend for="message">Mensaje</Legend>
              <Textarea
                name="message"
                id="message"
                cols=""
                rows=""
                placeholder="Escriba aquí su mensaje"
                required
              ></Textarea>

              <Button className="form-button" type="submit">
                Enviar
              </Button>
            </Container>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

export default Contact;
