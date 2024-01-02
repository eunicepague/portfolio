// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import Me from './../../assets/gradpic.jpg';
import './Achievement.css';

const Achievement = () => {
  return (
    <Container fluid className="achievement-container">
      <section className="achievement-content">
        <Row>
          <Col className="achievement-right" sm={12} md={6} lg={6}>
            <div className="achievement-img-container">
              <img src={Me} />
            </div>
          </Col>
          <Col className="achievement-left" sm={12} md={6} lg={{ padding: 6 }}>
            <div className="achievement-intro">
              <h1>Achievements.</h1>
              <Fade>
                <ul>
                  <li>Magna Cum Laude (2023)</li>
                  <li> President Lister (2019-2023)</li>
                  <li>Kodego Bootcamp Graduate Batch WD81 2023</li>
                  <li>With High Honor / Overall Top 1 in ICT course</li>
                  <li>Outstanding Performance in Arts</li>
                  <li>Outstanding Performance in Communication Arts</li>
                  <li>Outstanding Performance in Mathematics</li>
                  <li>Leadership and Outstanding Organization Award</li>
                  <li>MilleniA.R.T.S Club - President (2019)</li>
                  <li>MilleniA.R.T.S Club - Secretary (2018)</li>
                  <li>Iskolar ng Lungsod ng San Pedro (ILSP) scholar</li>
                </ul>
              </Fade>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Achievement;
