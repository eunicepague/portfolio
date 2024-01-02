// import React from 'react';

import { Container, Row, Col, Nav } from 'react-bootstrap';

import Linkedin from './../../assets/linkedin-cl.png';
import Facebook from './../../assets/fb-cl.png';
import Instagram from './../../assets/instagram-cl.png';
import Github from './../../assets/github-cl.png';

import './Footer.css';

const Footer = () => {
  return (
    <Container fluid className="footer-container" id="footer">
      <section className="footer-content">
        <Row id="first-row">
          <Col sm={12} md={6} lg={6}>
            <h1>LET'S WORK TOGETHER</h1>
          </Col>
          <Col id="footer-btn" sm={12} md={6} lg={6}>
            <a
              href="mailto:eunicegracepague@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <p>Let's talk</p>
              </button>
            </a>
          </Col>
        </Row>
        <Row id="second-row">
          <Col sm={4} md={6} lg={6}>
            <Nav className="navbar" id="navbar-footer">
              <Nav.Item>
                <Nav.Link href="#hero">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#project">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#footer">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col id="footer-contact" sm={8} md={6} lg={6}>
            <p>Phone: +639107888915</p>
            <p>Mail: eunicegracepague@gmail.com</p>
          </Col>
        </Row>
        <hr></hr>

        <Row id="third-row">
          <Col>
            <p>Eunice Pague</p>
          </Col>
          <Col id="footer-copyright">
            <p> Copyright &copy; 2024 Eunice Pague. All rights reserved</p>
          </Col>
          <Col id="footer-logo-container">
            <div>
              <a
                href="https://www.linkedin.com/in/eunice-grace-pague-177324266/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} />
              </a>

              <a
                href="https://www.facebook.com/eunice.pague"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} />
              </a>
              <a
                href="https://www.instagram.com/_mmcutie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} />
              </a>
              <a
                href="https://github.com/eunicepague"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Github} />
              </a>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Footer;
