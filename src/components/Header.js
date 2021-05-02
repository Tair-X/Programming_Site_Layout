import React from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import log from "../images/song-3.jpg"
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";
import About from "./About";

const Header = () => {
    return (
        <>
            <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                             height="30"
                             width="30"
                             className="d-inline-block align-top"
                             alt="logo"/>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>

                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>


                        </Form>


                    </Navbar.Collapse>


                </Container>

            </Navbar>

            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/about" component={About}/>
                </Switch>

            </Router>


        </>
    );
};

export default Header;