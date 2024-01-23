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
                  Hello! I’m Eunice Grace Pague, a Magna Cum Laude Computer
                  Science geek with a passion for coding, art, and gaming. I’m
                  on the lookout for a web development role where I can bring my
                  enthusiasm, creativity, and love for learning to the company
                  that provides growth and innovation.
                </p>
                <div className="hero-btn-container">
                  <a href="#techstacks">
                    <button id="btn-1">
                      <p>Get Started</p>
                    </button>
                  </a>
                  <a
                    href="https://doc-04-ao-prod-03-apps-viewer.googleusercontent.com/viewer2/prod-03/pdf/aqlgsnuqiq4uvvticket55e6rf18sbkm/csd6us18ej7legegpr0tajhlpbet2boo/1704208425000/3/108871701221325884026/APznzaax1ii25RplQT8W5-lBfaCy2cGYCqW8T8KSNaJYCnW3ntMmllxNXcMEilMtaQh098rcemrYsXBsj7oIUsFmPY0lQL3puCTeMqMKIEy7UHrV3HgQCfo06vHUzy4JKtTKG_HB5uWeAnVHLhHbCjn8LYT29-4OPRrFo4rSAaGHPipGOmWXCLdvq1wJfPTuxZg93aPNXg0Ei7CQVrqLM9_OnuhSN5_-EoJTxX9bC1STTpVc3KL9E1ta8-LGMM3Vddu2uGtJ3rewOY54d3ij6kOpUuKAN0c_a3FiI5gD12OF_Zcn0EN9EJkw82eRx28Ta2G0IpCUASxv9CLlX-SSUWwEtInOoluOYxdOoZPRcagcmDc57JTczXsv5KptGASvdRL2vz76qsl3XTxXBpqJwhrV9s8ZRjbjAd0Xel9iZe2hnGVJJOwE1b4=?authuser=0&nonce=il462kqm1jheq&user=108871701221325884026&hash=t9n61qer9e08kr5d7vvrermmmr5cqr5a"
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
