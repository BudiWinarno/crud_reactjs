import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logoImg from "../assets/logo.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logoImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
