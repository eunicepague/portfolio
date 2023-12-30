// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Proj.css';

import Proj1 from './../../assets/p1.png';
import Proj2 from './../../assets/p2.png';

const Proj = () => {
  return (
    <Container fluid className="proj-container">
      <section className="proj-content">
        <div className="proj-intro">
          <h1>Projects.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro,
            quos.
          </p>
        </div>

        <Row className="project-container">
          <Col className="proj-img" md={12} lg={6}>
            <img src={Proj1} />
          </Col>
          <Col className="proj-img-content" md={12} lg={6}>
            <div>
              <h3>The Ordinary Website</h3>
              <p className="mt-4">
                Using The Ordinary as our quality standard, we developed a
                website that showcases their products and data. This project
                served as a practical tool for refining our web development
                skills, mirroring The Ordinary’s professionalism. We’re eager to
                apply the enhanced skills from this enriching experience to
                future projects.
              </p>
            </div>

            <div className="proj-btn-content">
              <div className="skill-set">
                <p>Skill set: </p>
                <button>HTML</button>
                <button>CSS</button>
                <button>Bootstrap</button>
                <button>JS</button>
                <button>ReactJs</button>
                <button>NodeJs</button>
                <button>PHP</button>
                <button>Laravel</button>
              </div>
              <div>
                <button id="project-button">
                  View Me
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="project-container">
          <Col className="proj-img" md={12} lg={6}>
            <img src={Proj2} />
          </Col>
          <Col className="proj-img-content" md={12} lg={6}>
            <div>
              <h3>The Good Shepherd Sweets</h3>
              <p className="mt-4">
                My first web development project, a delightful cake shop
                website. This website is a mock-up of a cake shop that I
                single-handedly developed using HTML, CSS, and JavaScript. It
                showcases my skills in front-end web development and my passion
                for creating user-friendly interfaces. The website features a
                variety of cakes and pastries, each with its own detailed
                product page. It also includes an interactive order form,
                allowing customers to place orders directly from the website.
                This project was a wonderful learning experience and a
                significant step in my journey as a web developer
              </p>
            </div>

            <div className="proj-btn-content">
              <div className="skill-set">
                <p>Skill set: </p>
                <button>HTML</button>
                <button>CSS</button>
                <button>Bootstrap</button>
                <button>JS</button>
              </div>
              <div>
                <button id="project-button">
                  View Me
                  <div className="arrow-wrapper">
                    <div className="arrow"></div>
                  </div>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Proj;
