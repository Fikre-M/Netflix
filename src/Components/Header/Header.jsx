import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Header = () => {
  return (
    <div className="header">
      {/* Navigation Bar */}
      <nav>
        <Container>
          <Row className="align-items-center">
            <Col xs={6} md={4} className="logo-col">
              {/* Netflix Logo Link without image */}
              <Link to="/" className="text-decoration-none">
                    <span style={{ color: 'red' }} className="fw-bold fs-4">NETFLIX</span>
               </Link>
            </Col>
            <Col xs={6} md={8} className="text-end button-col">
              <Button className="language-button" variant="outline-light">
                English <ArrowDropDownIcon />
              </Button>
              <Link to="/signin">
                <Button variant="danger" className="navsignin">
                  Sign in
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </nav>

      {/* Header Content */}
      <div className="header-content text-center text-light">
        <Container>
          <Row>
            <Col>
              <h1>Unlimited movies, TV shows, and more</h1>
              <h3>Starts at $7.99. Cancel anytime.</h3>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>

              {/* Email Signup Form */}
              <Form className="emailsignup d-flex justify-content-center">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  required
                  className="me-2"
                  variant="outline-light"
                />
                <Button type="submit" variant="danger">
                  Get Started <KeyboardArrowRightIcon />
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
