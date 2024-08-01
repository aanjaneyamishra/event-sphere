import React from 'react';
import { Carousel, Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './CategoryGrid.css';

const HomePage = () => {
    return (
        <>
            <header className="container-fluid d-flex justify-content-between align-items-center py-2">
                <h1>
                    
                    EventSphere
                </h1>
                <div>
                    <Button variant="outline-primary" href="/login">Log in</Button>
                    <Button variant="primary" href="/signup" className="ms-2">Sign up</Button>
                </div>
            </header>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="me-auto mb-2 mb-lg-0">
                            <NavDropdown title="Categories" id="categoriesDropdown">
                                <NavDropdown.Item href="#">Travel and Outdoor</NavDropdown.Item>
                                <NavDropdown.Item href="#">Social Activities</NavDropdown.Item>
                                <NavDropdown.Item href="#">Hobbies and Passions</NavDropdown.Item>
                                <NavDropdown.Item href="#">Sports and Fitness</NavDropdown.Item>
                                <NavDropdown.Item href="#">Health and Wellbeing</NavDropdown.Item>
                                <NavDropdown.Item href="#">Technology</NavDropdown.Item>
                                <NavDropdown.Item href="#">Art and Culture</NavDropdown.Item>
                                <NavDropdown.Item href="#">Games</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Events" id="eventsDropdown">
                                <NavDropdown.Item href="#">Upcoming</NavDropdown.Item>
                                <NavDropdown.Item href="#">Popular</NavDropdown.Item>
                                <NavDropdown.Item href="#">Virtual</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">About us</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="e2.jpg" alt="First slide" style={{ height: '550px' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="e4.jpg" alt="Second slide" style={{ height: '550px' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="e3.jpg" alt="Third slide" style={{ height: '550px' }} />
                </Carousel.Item>
            </Carousel>
            <Container className="text-center">
                <div className="title">Explore top categories</div>
                <div className="grid">
                    <div className="category">
                        <div className="icon">🌲</div>
                        <div className="label">Travel and Outdoor</div>
                    </div>
                    <div className="category">
                        <div className="icon">🎉</div>
                        <div className="label">Social Activities</div>
                    </div>
                    <div className="category">
                        <div className="icon">🎨</div>
                        <div className="label">Hobbies and Passions</div>
                    </div>
                    <div className="category">
                        <div className="icon">⚽</div>
                        <div className="label">Sports and Fitness</div>
                    </div>
                    <div className="category">
                        <div className="icon">🌿</div>
                        <div className="label">Health and Wellbeing</div>
                    </div>
                    <div className="category">
                        <div className="icon">💻</div>
                        <div className="label">Technology</div>
                    </div>
                    <div className="category">
                        <div className="icon">🎭</div>
                        <div className="label">Art and Culture</div>
                    </div>
                    <div className="category">
                        <div className="icon">🎲</div>
                        <div className="label">Games</div>
                    </div>
                </div>
            </Container>
            <Container>
                <h1 className="my-4">Travel & Tours</h1>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="t1.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Kerala</Card.Title>
                                <Card.Text>The beauty of Kerala lies in its simplicity.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="t2.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Nainital</Card.Title>
                                <Card.Text>Nainital, the charming Himalayan lake town.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="t3.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Rajasthan</Card.Title>
                                <Card.Text>Embracing the Rajasthan spirit, one bite at a time.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className="my-4">Health And Wellbeing</h1>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="h1.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Wellbeing Fest</Card.Title>
                                <Card.Text>Nothing looks good as Healthy feel.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="h2.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Healthy Food Festival</Card.Title>
                                <Card.Text>Fresh, delicious, nutritious.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="h3.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Yoga Class</Card.Title>
                                <Card.Text>The yoga pose you avoid the most you need most.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className="my-4">Conference</h1>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="conf1.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Digital Marketing</Card.Title>
                                <Card.Text>The best marketing doesn't feel like marketing.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="conf2.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>Business Conference</Card.Title>
                                <Card.Text>The Next Mind.</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src="conf3.jpg" style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Title>BlockChain Technology</Card.Title>
                                <Card.Text>Design Thinking and Technical WorkShop</Card.Text>
                                <Button variant="primary" href="#">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <footer className="text-center py-4">
                <p>&copy; 2023 EventSphere. All rights reserved.</p>
            </footer>
        </>
    );
};

export default HomePage;
