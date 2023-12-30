// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Me from './../../assets/eunicepague.png';

import './Hero.css';

const Hero = () => {
  return (
    <Container fluid className="hero-container">
      <section className="hero-content">
        <Row>
          <Col className="hero-left" sm={12} md={6} lg={6}>
            <div className="hero-intro">
              <h1>FRONTEND DEVELOPER</h1>
              <h1>
                Hello,
                <span style={{ color: '#d73d57' }}>I'm Euncice Pague</span>
              </h1>
              <p className="mt-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                facilis magnam pariatur sit non aperiam? Magni maiores eveniet
                quis animi!
              </p>
              <div className="hero-btn-container">
                <button id="btn-1">
                  <p>Get Started</p>
                </button>
                <button id="btn-2">
                  <p>Download Resume</p>
                </button>
              </div>
            </div>
          </Col>
          <Col className="hero-right" sm={12} md={6} lg={6}>
            <div className="hero-img-container">
              <img src={Me} />
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Hero;
