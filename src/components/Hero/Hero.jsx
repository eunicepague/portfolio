// import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Me from './../../assets/eunicepague.png';

import Crown from './../../assets/crown.png';

import './Hero.css';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
    document
      .getElementById('landing-content')
      .addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document
      .getElementById('landing-content')
      .removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseMove = (e) => {
    const crownContent = document.getElementById('landing-content');
    const rect = crownContent.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - 88, // subtract half the width of the image
      y: e.clientY - rect.top - 160, // subtract half the height of the image
    });
  };

  useEffect(() => {
    return () => {
      document
        .getElementById('landing-content')
        .removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container fluid className="hero-container">
      <section className="hero-content">
        <Row>
          <Col className="hero-left" sm={12} md={6} lg={6}>
            <div className="hero-intro">
              <h4>FRONTEND DEVELOPER</h4>
              <h1>
                Hello,{' '}
                <span style={{ color: '#d73d57' }}>I'm Eunice Pague!</span>
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
            <Col
              id="landing-content"
              className="d-none d-lg-block d-md-none d-sm-none"
              onMouseEnter={handleMouseEnter}
            >
              {isHovered && (
                <img
                  className="landingCrown d-none d-md-flex"
                  src={Crown}
                  style={{
                    position: 'absolute',
                    left: mousePosition.x + 'px',
                    top: mousePosition.y + 'px',
                  }}
                />
              )}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
                onMouseLeave={handleMouseLeave}
              />
            </Col>

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
