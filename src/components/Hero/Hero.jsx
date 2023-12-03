// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';
import Me from './../../assets/me.png';

const Hero = () => {
  return (
    <Container className="hero-container">
      <Row className="hero-content">
        <Col className="hero-left" sm={12} md={12} lg={6}>
          <h1>Hi! I am Eunice Pague -</h1>
          <h1>FRONTEND DEVELOPER</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi modi
            eius ab voluptatum autem cumque, quod qui! Quia, odit nam.
          </p>
          <div>
            <button style={{ marginRight: '1rem' }}>Get Started</button>
            <button>Download CV</button>
          </div>
        </Col>
        <Col className="hero-right" sm={12} md={12} lg={6}>
          <img src={Me} />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
