// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <section className="services-content">
        <div className="services-introduction">
          <p>Services</p>
          <h1>What I do</h1>
        </div>
        <div className="services-btn">
          <Fade direction="right" triggerOnce={true}>
            <button id="first-btn">UI/UX Prototyping</button>
          </Fade>

          <Fade direction="left" triggerOnce={true}>
            <button id="sec-btn">Web Designing</button>
          </Fade>

          <Fade direction="right" triggerOnce={true}>
            <button id="third-btn">Mobile Designing</button>
          </Fade>

          <Fade direction="left" triggerOnce={true}>
            <button id="fourth-btn">Sample Sample</button>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Services;
