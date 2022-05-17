import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Pages/Gokul pages/Menu.css";
import Produts from "../../Pages/Gokul pages/Produts";
import Resourse from "../../Pages/Gokul pages/Resourse";
import Insprataion from "../../Pages/Gokul pages/Insprataion";
// import Price from "../../Pages/Gokul pages/Price";
// import { BsSearch, BsGlobe } from "react-icons/bs";
import { GiNewspaper } from "react-icons/gi";

function Menu() {
  return (
    <>
      <Navbar bg="warning" expand="lg" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">
            <GiNewspaper size={40} />
            <b className="ps-3">News Letter</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link
                to="/"
                exact
                className=" nav text-center mx-auto ps-lg-2"
              >
                <Link to="/" className=" nav ps-lg-2">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Produts"
                className=" nav text-center mx-auto ps-lg-2"
              >
                <Link to="/Produts" className=" nav ps-lg-2">
                  <Produts />
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Resourse"
                className="nav text-center mx-auto ps-lg-2"
              >
                <Link to="/Resourse" className=" nav ps-lg-2">
                  <Resourse />
                </Link>
              </Nav.Link>
              <Nav.Link
                to="/Insprataion"
                className="nav text-center mx-auto ps-lg-2"
              >
                <Link to="/Insprataion" className=" nav ps-lg-2">
                  <Insprataion />
                </Link>
              </Nav.Link>

              <Nav.Link to="/Markting" className=" text-center mx-auto">
                <Link to="/Markting" className=" nav ps-lg-2">
                  Pricing
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link to="/Login" className=" text-center mx-auto">
                <Link to="/Login">
                  <Button variant="primary" size={"md"}>
                    Login
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link to="/Signup" className=" text-center mx-auto">
                <Link to="/Signup">
                  <Button variant="light" size={"md"}>
                    Singup
                  </Button>
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="success" size={"md"}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
