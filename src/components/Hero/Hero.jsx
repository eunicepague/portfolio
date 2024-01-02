// import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Fade } from 'react-awesome-reveal';

import Me from './../../assets/eunicepague.png';
import Crown from './../../assets/crown.png';
import FB from './../../assets/fb.png';
import Linkedin from './../../assets/linkedin.png';
import Instagram from './../../assets/instagram.png';
import Github from './../../assets/github.png';

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
    <Container fluid className="hero-container" id="hero">
      <section className="hero-content">
        <Row>
          <Col className="hero-left" sm={12} md={6} lg={6}>
            <div className="hero-intro">
              <Fade direction="left">
                <h4>FRONTEND DEVELOPER</h4>
                <h1>
                  Hello,{' '}
                  <span style={{ color: '#d73d57' }}>I'm Eunice Pague!</span>
                </h1>
                <p className="mt-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, facilis magnam pariatur sit non aperiam? Magni maiores
                  eveniet quis animi!
                </p>
                <div className="hero-btn-container">
                  <a href="#techstacks">
                    <button id="btn-1">
                      <p>Get Started</p>
                    </button>
                  </a>
                  <a
                    href="https://doc-0o-ao-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/aqlgsnuqiq4uvvticket55e6rf18sbkm/0nd6ot5krg5nc8v04fhf20f9vhihjb8o/1704199950000/3/108871701221325884026/APznzaYxTY5cP1ueLcAr6yh7ie1jr5VpGtj6l7YEmRMgIx4Pl5M2W63PT_R-VQcYwy3HhEHoDebOp3dte7fswO89gF3v8o7U9SJNwNWvh0mGDIawEYul17VV34I8FHZm8XaZn01T1TLJ1EXOsU08aUgR05oKAphuceu0eQWMOplMfznx5dSm7c7lRinYmo7bTWkj5xlKLD2Lm7TVfiNhX6YSLacz7nhhbahCL8WNwU5iih87EHvx0L23vmU1e6W5ZWkPo8iP1sJSUC3wMFp4-hq2arzKMVvQ-fnamxLFHTPVhvRkjmBp3k_9L7dgd6JY9VSUkog9MYGFNU-LczJxtJs8p7bVVA97UI_T9mup3eqyx7ws0zWlk-Y-qArXg48zPhXpL9p68p_scKXVpN43EavM0XJ0U8XlbUvZe7RvJ4JpgGYBSef4s04=?authuser=0&nonce=nvit8pf1pl0n8&user=108871701221325884026&hash=lpp1jcjvou7lguj1obtp2gho6mct3oqh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button id="btn-2">
                      <p>Download Resume</p>
                    </button>
                  </a>
                </div>
              </Fade>
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

            <div className="hero-icons-container">
              <Fade direction="right">
                <Link
                  to="https://www.linkedin.com/in/eunice-grace-pague-177324266/"
                  target="_blank"
                >
                  <img src={Linkedin} />
                </Link>

                <Link
                  to="https://www.facebook.com/eunice.pague"
                  target="_blank"
                >
                  <img src={FB} />
                </Link>

                <Link to="https://www.instagram.com/_mmcutie/" target="_blank">
                  <img src={Instagram} />
                </Link>

                <Link to="https://github.com/eunicepague" target="_blank">
                  <img src={Github} />
                </Link>
              </Fade>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Hero;
