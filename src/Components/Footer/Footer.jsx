import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
          <FaFacebook /> 
          <FaInstagram />
          <FaYoutube />
      </div>
      <h2>Questions? Call 1-234-567-8910</h2>
      <Container>
        <Row>
          <Col xs={6} sm={3} className="footer-col">
            <ul>
              <li>
                <a href="https://help.netflix.com/en/node/412">FAQ</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Netflix Shop</a>
              </li>
              <li>
                <a href="#">Buy Gift Cards</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={3} className="footer-col">
            <ul>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
              <li>
                <a href="#">Do Not Sell or Share My Personal Information</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={3} className="footer-col">
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Redeem Gift Cards</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
            </ul>
          </Col>
          <Col xs={6} sm={3} className="footer-col">
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
              <li>
                <a href="#">Ad Choices</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Button
        className="language-button"
        variant="outline-light"
        aria-label="Change language"
      >
        English <ArrowDropDownIcon />
      </Button>
      <br />
      <br />
      </footer>
  );
};

export default Footer;
