import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Landing.css';

import Fb from './../../assets/fb.png';
import Github from './../../assets/github.png';
import Instagram from './../../assets/instagram.png';
import Linkedin from './../../assets/linkedin.png';

import Crown from './../../assets/crown.png';

const Landing = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleCircleClick = (index) => {
    setActiveIndex(index);
    console.log(index);
  };

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
      y: e.clientY - rect.top - 130, // subtract half the height of the image
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
    <div className="landing-container">
      <Row className="landing-content">
        <Col className="landing-left" md={12} lg={6}>
          <p id="landing-intro">Hello, I am</p>
          <p id="landing-name">
            Eunice <span id="surname">Pague</span>
          </p>

          <div className="landing-icons">
            <img src={Linkedin} id="linkedin" />
            <img src={Fb} id="fb" />
            <img src={Instagram} id="instagram" />
            <img src={Github} id="github" />
          </div>

          <div id="email">
            <p style={{ color: '#6a6a6a' }}>Email:</p>
            <p>eunicegracepague@gmail.com</p>
          </div>
        </Col>

        <div id="landing-content" onMouseEnter={handleMouseEnter}>
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
        </div>

        <Col className="landing-right" md={12} lg={6}>
          <div id="landing-right-container">
            <div id="landing-right-btn">
              <button className={activeIndex === 0 ? 'active-btn' : ''}>
                Artist
              </button>
              <button className={activeIndex === 1 ? 'active-btn' : ''}>
                Front-end Developer
              </button>
              <button className={activeIndex === 2 ? 'active-btn' : ''}>
                UI/UX Designer
              </button>
            </div>

            <div className="carousel-circles">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`circle ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleCircleClick(index)}
                />
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Landing;
