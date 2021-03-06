import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import icon from "../img/logo.png";

class MainNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <img id="navIcon" style={{ color: "white" }} src={icon}></img>
        <Navbar.Brand href="#home" className="ml-2" style={{ color: "white" }}>
          BetterWeather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavBar;
