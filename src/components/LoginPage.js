import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'password') {
            const otp = prompt("Enter OTP sent to your registered email:");
            if (otp === '1234') {
                alert("Welcome, " + username + "!");
                alert("Logged in...");
                window.location.href = "/"; // Redirect to home page
            } else {
                alert("Invalid OTP");
                window.location.href = "/login"; // Redirect back to login page
            }
        } else {
            alert("Invalid User... " + username);
            window.location.href = "/login"; // Redirect back to login page
        }
    };

    return (
        <>
            <div className="container-fluid d-flex justify-content-between align-items-center py-2">
                <h1>
                    
                    EventSphere
                </h1>
                <div>
                    <Button variant="outline-primary" href="/login">Log in</Button>
                    <Button variant="primary" href="/signup" className="ms-2">Sign up</Button>
                </div>
            </div>
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
            <section className="vh-100">
                <Container fluid className="h-custom">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col md={9} lg={6} xl={5}>
                            
                        </Col>
                        <Col md={8} lg={6} xl={4} className="offset-xl-1">
                            <Form id="loginForm" onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label htmlFor="uname">Username:</label>
                                    <FormControl
                                        type="text"
                                        id="uname"
                                        placeholder="Enter a valid Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <label htmlFor="pass">Password:</label>
                                    <FormControl
                                        type="password"
                                        id="pass"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Form.Check type="checkbox" id="form2Example3" label="Remember me" />
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <Button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer className="text-center py-4" style={{ backgroundColor: 'gainsboro' }}>
                <h6>
                    © 2024 EventSphere &nbsp;&nbsp;
                    Terms of Service &nbsp;&nbsp;
                    Privacy Policy &nbsp;&nbsp;
                    Cookie Policy &nbsp;&nbsp;
                    Help
                </h6>
            </footer>
        </>
    );
};

export default LoginPage;
