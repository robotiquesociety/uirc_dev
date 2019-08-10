import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mainBG from '../images/mainBG.jpg';
import robattle from '../images/robattle.jpg';

export default class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <img src={mainBG} className="poster-img" alt="poster" />
                <Jumbotron fluid>
                    <Container fluid>
                        <Row className="justify-content-md-center">
                            <Col xs lg="2"></Col>
                            <Col md="auto">JOIN THE FIGHT</Col>
                            <Col xs lg="2"></Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={robattle} />
                                    <Card.Body>
                                        <Card.Title>Robattle</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">More Informations...</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={robattle} />
                                    <Card.Body>
                                        <Card.Title>Line Following</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">More Informations...</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={robattle} />
                                    <Card.Body>
                                        <Card.Title>Engineering Challenge</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                        </Card.Text>
                                        <Button variant="primary">More Informations...</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}