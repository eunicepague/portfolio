// import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import './Techstack.css';

import HTML from './../../assets/html.png';
import CSS from './../../assets/css.png';
import JS from './../../assets/javascript.png';
import React from './../../assets/reactjs.png';
import Node from './../../assets/nodejs.png';
import Bootstrap from './../../assets/bootstrap.png';
import Tailwind from './../../assets/tailwind.png';
import SASS from './../../assets/sass.png';
import Git from './../../assets/git.png';
import API from './../../assets/restapi.png';
import Vite from './../../assets/vite.png';
import Vercel from './../../assets/vercel.png';
import Figma from './../../assets/figma.png';
import NPM from './../../assets/npm.png';
import Laravel from './../../assets/laravel.png';
import PHP from './../../assets/php.png';

const Techstack = () => {
  return (
    <Container fluid className="tech-container">
      <Row className="tech-content">
        <Col className="tech-right order-1 order-lg-0" lg={6}>
          <div className="tech-img-container">
            <img src={HTML} />
            <img src={CSS} />
            <img src={JS} />
            <img src={Bootstrap} />
            <img src={Tailwind} />
            <img src={SASS} />
            <img src={React} />
            <img src={Node} />
            <img src={Vite} />
            <img src={Vercel} />
            <img src={Git} />
            <img src={API} />
            <img src={Figma} />
            <img src={NPM} />
            <img src={Laravel} />
            <img src={PHP} />
          </div>
        </Col>
        <Col className="tech-left order-0 order-lg-1" lg={6}>
          <div id="tech-intro">
            <p>Tech Stacks.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Techstack;
