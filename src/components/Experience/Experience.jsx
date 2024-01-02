import { Container, Row, Col } from 'react-bootstrap';
import { Slide } from 'react-awesome-reveal';

import Circle from './../../assets/circleYellow.png';

import './cute.css';

const Experience = () => {
  return (
    <Container fluid className="experience-container">
      <section id="experience-bg">
        <Row id="exp-row">
          <div id="experience-intro">
            <h1>Education & Experience</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              impedit!
            </p>
          </div>
          <Row className="vertical-lines-container">
            <Col className="experience-left" xs={5} sm={5} md={5} lg={5}>
              <div id="exp-one">
                <Col id="ex1">
                  <Slide direction="left">
                    <div className="experience-box">
                      <h5>Full Stack Web Dev Graduate</h5>
                      <p>Nov 2023</p>
                      <p>KodeGo Bootcamp</p>
                    </div>
                  </Slide>
                </Col>
                <Col id="ex2">
                  <Slide direction="left">
                    <div className="experience-box">
                      <h5>FrontEnd Developer Intern</h5>
                      <p>February 2023 - April 2023</p>
                      <p>Highly Succeed Inc.</p>
                    </div>
                  </Slide>
                </Col>
              </div>
            </Col>
            <Col className="vertical-container" xs={2} sm={2} md={2} lg={2}>
              <Slide direction="left">
                <div className="vertical-line">
                  <img src={Circle} id="circle1" />
                  <img src={Circle} id="circle2" />
                  <img src={Circle} id="circle3" />
                  <img src={Circle} id="circle4" />
                  <img src={Circle} id="circle5" />
                </div>
              </Slide>
            </Col>
            <Col className="experience-right" xs={5} sm={5} md={5} lg={5}>
              <div id="exp-two">
                <Col id="ex3">
                  <Slide direction="right">
                    <div className="experience-box">
                      <h5>Building Portfolios</h5>
                      <p>Current</p>
                    </div>
                  </Slide>
                </Col>
                <Col id="ex4">
                  <Slide direction="right">
                    <div className="experience-box" id="college">
                      <h5>Bachelors of Science in Computer Science Graduate</h5>
                      <p>October 2023</p>
                      <p>AMACC Makati</p>
                    </div>
                  </Slide>
                </Col>
                <Col id="ex5">
                  <Slide direction="right">
                    <div className="experience-box">
                      <h5>ICT strand Graduate</h5>
                      <p>April 2019</p>
                      <p>Informatics College Northgate</p>
                    </div>
                  </Slide>
                </Col>
              </div>
            </Col>
          </Row>
        </Row>
      </section>
    </Container>
  );
};

export default Experience;
