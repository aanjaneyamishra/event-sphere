import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = formData;
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } else {
            alert(`User ${username} registered with email ${email}`);
            window.location.href = "/login"; // Redirect to login page
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
                            <Form id="signupForm" onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <label htmlFor="username">Username:</label>
                                    <FormControl
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Enter a valid Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label htmlFor="email">Email:</label>
                                    <FormControl
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter a valid Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <label htmlFor="password">Password:</label>
                                    <FormControl
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Enter password"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <FormControl
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        placeholder="Confirm password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Form.Check type="checkbox" id="form2Example3" label="Remember me" />
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <Button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                                        Sign Up
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

export default SignupPage;
