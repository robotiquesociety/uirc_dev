import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import robattle from "../images/robattle.jpg";
import mainBG from "../images/mainBG.jpg";
import engcPic from "../images/engc4.jpeg";
import TopBanner from "../components/TopBanner.js";
import Countdown from "../components/Countdown.js";
import "./Mainpage.css";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaIdBadge,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaMailBulk
} from "react-icons/fa";
import { observer } from "mobx-react";
import store from "../stores/index.js";

const Mainpage = observer(
class Mainpage extends React.Component {
  constructor(props) {
    super(props);
    this.gotoCombat = this.gotoCombat.bind(this);
    this.gotoLifo = this.gotoLifo.bind(this);
    this.gotoEngChallenge = this.gotoEngChallenge.bind(this);
  }

  gotoCombat() {
    store.pageNav.setPage("robocombat");
  }

  gotoLifo() {
    store.pageNav.setPage("lifo");
  }

  gotoEngChallenge() {
    store.pageNav.setPage("engc");
  }

  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div>
        <TopBanner src={mainBG} />
        <Countdown date={`${year}-12-24T00:00:00`} />
        <br />
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col md="8">
              <Row>
                <Col>
                  <div className="my-card">
                    <Row>
                      <Col md="4">
                        <img
                          className="d-block img-main"
                          src={robattle}
                          alt="Third slide"
                        />
                      </Col>
                      <Col>
                        <h3>Robattle</h3>
                        <br />
                        <p>UniKL Ro-Battle Competition aims to create awareness and interest in robotics technology as well as create a platform for various people especially the students to be involved in a more hands-on and practical aspect in engineering and technology through robotics...</p>
                        <Button variant="primary" onClick={this.gotoCombat}>More Informations...</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="my-card">
                    <Row>
                      <Col md="4">
                        <img
                          className="d-block img-main"
                          src={robattle}
                          alt="Third slide"
                        />
                      </Col>
                      <Col>
                        <h3>Line Following</h3>
                        <br />
                        <p>A Robotic Line Follower Competition will be held in UniKL
                      MFI on 2nd until 3rd November 2019. There will be school
                      category and open category. Don't miss this chance to test
                      your understanding in line following robot...</p>
                        <Button variant="primary" onClick={this.gotoLifo}>More Informations...</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <div className="my-card">
                    <Row>
                      <Col md="4">
                      <img
                          className="d-block img-main"
                          src={engcPic}
                          alt="Third slide"
                        />
                      </Col>
                      <Col>
                        <h3>Engineering Challenge</h3>
                        <br />
                        <p>
                          UniKL MFI Engineering Challenge is an innovation and
                          creativity competition that is created for the primary
                          and secondary school students. In this challenge,
                          students are tasked to solve engineering related
                          challenges...
                        </p>
                        <Button variant="primary" onClick={this.gotoEngChallenge}>More Informations...</Button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <Row>
                <Col>
                  <Carousel interval="3000">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={robattle}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={robattle}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={robattle}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Card>
                    <Card.Header>Contact</Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <p>
                          <b>Vice-Program Director</b>
                          <br />
                          <FaIdBadge /> Muhamad Azhar Ridhwan
                          <br />
                          <FaWhatsapp /> 011-611 40939
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p>
                          <b>Treasurer</b>
                          <br />
                          <FaIdBadge /> Qurratul Nadzirah
                          <br />
                          <FaWhatsapp /> 019-621 3791
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p>
                          <b>Registration Unit</b>
                          <br />
                          <FaIdBadge /> Nasrullah
                          <br />
                          <FaWhatsapp /> 019-904 5906
                        </p>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <p>
                          <b>Registration Unit</b>
                          <br />
                          <FaIdBadge /> Nasrullah
                          <br />
                          <FaWhatsapp /> 019-904 5906
                        </p>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button
                        variant="link"
                        href="https://www.facebook.com/robotiquesociety"
                      >
                        <FaFacebook /> Facebook
                      </Button>
                      <Button
                        variant="link"
                        href="https://twitter.com/RS_UniKLMFI"
                      >
                        <FaTwitter /> Twitter
                      </Button>
                      <Button
                        variant="link"
                        href="mailto:robotiquesociety@gmail.com"
                      >
                        <FaMailBulk /> Email
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            SPONSOR
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
)

export default Mainpage