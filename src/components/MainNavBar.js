import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import icon from "../img/sunset.svg";

class MainNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <img id="navIcon" src={icon}></img>
        <Navbar.Brand href="#home">BetterWeather</Navbar.Brand>
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
