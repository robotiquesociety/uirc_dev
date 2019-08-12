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
import store from "../stores/index.js";
import { observer } from "mobx-react";
import AboutUs from "./AboutUs";

const Links = observer(
  class Links extends React.Component {
    constructor(props) {
      super(props);
      this.gotoHome = this.gotoHome.bind(this);
      this.gotoCombat = this.gotoCombat.bind(this);
      this.gotoAbout = this.gotoAbout.bind(this);
    }

    gotoHome() {
      store.pageNav.setPage("home");
    }

    gotoCombat() {
      store.pageNav.setPage("robocombat");
    }

    gotoAbout() {
      store.pageNav.setPage("about");
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
        case "about":
          link = <AboutUs />;
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
                  <NavDropdown.Item
                    onClick={this.gotoCombat}
                    className={page.comp1Active}
                  >
                    Robot Combat
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Line Following
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Engineering Challenge
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link>Schedule</Nav.Link>
                <Nav.Link>Accomodation</Nav.Link>
                <Nav.Link onClick={this.gotoAbout}>About Us</Nav.Link>
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
);

export default Links;
