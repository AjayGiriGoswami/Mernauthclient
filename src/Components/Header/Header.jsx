import React, { useState } from "react";
import "./Headers.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div className="hamburgur">
            <i
              class="fa fa-bars inner"
              onClick={handleShow}
              aria-hidden="true"
              style={{ cursor: "pointer" }}
            ></i>
            <h2 className="mt-2 h2_right" style={{ color: "#6C63FF" }}>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Ajay Giri Goswami
              </NavLink>
            </h2>
          </div>

          <Nav className="nav">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none"
                style={common}
              >
                About
              </NavLink>
              <NavLink
                to="/Login"
                className="text-decoration-none"
                style={common}
              >
               Login
              </NavLink>
              <NavLink
                to="/Signup"
                className="text-decoration-none"
                style={common}
              >
                Signup
              </NavLink>
              <NavLink
                to="/Contact"
                className="text-decoration-none"
                style={common}
              >
                Contact
              </NavLink>
            </div>
          </Nav>
        </Container>

        {/* side baar */}
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className="side_nav" onClick={() => setShow(false)}>
              <NavLink
                to="/"
                className="text-decoration-none  mb-2"
                style={common}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-decoration-none  mb-2"
                style={common}
              >
                About
              </NavLink>
              <NavLink
                to="/Login"
                className="text-decoration-none"
                style={common}
              >
               Login
              </NavLink>
              <NavLink
                to="/Signup"
                className="text-decoration-none"
                style={common}
              >
                Signup
              </NavLink>
              <NavLink
                to="/contact"
                className="text-decoration-none  mb-2"
                style={common}
              >
                Contact
              </NavLink>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default Header;
