import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Mainpage from "./Mainpage";
import Robocombat from "./Robocombat";
import mainBG from "../images/mainBG.jpg";
import { FaRegCopyright } from "react-icons/fa";
import "./Links.css";
import store from '../stores/index.js';

export default class Links extends React.Component {
  constructor(props) {
    super(props);
    this.gotoHome = this.gotoHome.bind(this);
    this.gotoCombat = this.gotoCombat.bind(this);
    this.state = {
      homeActive: "active",
      compActive: "",
      comp1Active: "",
      comp2Active: "",
      comp3Active: "",
      aboutActive: "",
      contactActive: ""
    };
  }

  gotoHome() {
      store.pageNav.setPage("home");
    this.setState({
      homeActive: "active",
      compActive: "",
      comp1Active: "",
      comp2Active: "",
      comp3Active: "",
      aboutActive: "",
      contactActive: "",
    });
  }

  gotoCombat() {
    store.pageNav.setPage("robocombat");
    this.setState({
      homeActive: "",
      compActive: "active",
      comp1Active: "active",
      comp2Active: "",
      comp3Active: "",
      aboutActive: "",
      contactActive: "",
    });
  }

  render() {
    const page = store.pageNav;
    let link;

    switch (page.page) {
      case "home":
        link = <Mainpage />;
        break;
      case "robocombat":
        link = <Robocombat />;
        break;
      default:
        break;
    }

    return (
      <div className="body">
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Navbar.Brand href="#" onClick={this.gotoHome}>
            RS-LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link onClick={this.gotoHome} className={page.homeActive}>
                Home
              </Nav.Link>
              <NavDropdown
                title="2019 Competitions"
                id="collasible-nav-dropdown"
                className={page.compActive}
              >
                <NavDropdown.Item onClick={this.gotoCombat} className={page.comp1Active}>
                  Robot Combat
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Line Following
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Engineering Challenge
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">About Us</Nav.Link>
              <Nav.Link href="#deets">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container fluid>
          <img src={mainBG} className="poster-img" alt="poster" />
        </Container>
        {link}
        <br />
        <Container fluid className="footer">
          <FaRegCopyright className="footer-icon" /> Robotique Society 2019
        </Container>
      </div>
    );
  }
}
