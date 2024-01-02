import { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

import './Certificate.css';

import Educ1 from './../../assets/Education/OJT.jpg';
import Educ2 from './../../assets/Education/Bootcamp.jpg';

import Skill1 from './../../assets/Skill/html essential training.png';
import Skill2 from './../../assets/Skill/introduction to CSS.png';
import Skill3 from './../../assets/Skill/javascript essential training.png';
import Skill4 from './../../assets/Skill/boostrap five essential training.png';
import Skill5 from './../../assets/Skill/reactjs essential training.png';
import Skill6 from './../../assets/Skill/learning git and github.png';
import Skill7 from './../../assets/Skill/learning rest APIs.png';
import Skill8 from './../../assets/Skill/php essential training.png';
import Skill9 from './../../assets/Skill/laravel essential training.png';
import Skill10 from './../../assets/Skill/building RESTful APIs in Laravel.png';
import Skill11 from './../../assets/Skill/excel formulas and function quick tips.png';
import Skill12 from './../../assets/Skill/excel pivottables for beginners.png';

const Certificate = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [numImagesDisplayed, setNumImagesDisplayed] = useState(6);
  const [seeMore, setSeeMore] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setCurrentImg(img);
    setShow(true);
  };

  const handleSeeMore = () => {
    setNumImagesDisplayed(12);
    setSeeMore(true);
  };

  const handleSeeLess = () => {
    setNumImagesDisplayed(6);
    setSeeMore(false);
  };

  useEffect(() => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      setNumImagesDisplayed(12);
    }
  }, []);

  const images = [
    Educ1,
    Educ2,
    Skill1,
    Skill2,
    Skill3,
    Skill4,
    Skill5,
    Skill6,
    Skill7,
    Skill8,
    Skill9,
    Skill10,
    Skill11,
    Skill12,
  ];

  return (
    <Container fluid className="certificate-container">
      <Row className="certificate-content">
        <div className="certificate-intro">
          <h1>My certificates.</h1>
          <p>
            Equipped with numerous certificates, I bring validated expertise to
            the evolving tech landscape.
          </p>
        </div>

        <Col>
          <Fade>
            <div className="cert-img-container">
              {(seeMore ? images : images.slice(0, numImagesDisplayed)).map(
                (img, index) => (
                  <img key={index} src={img} onClick={() => handleShow(img)} />
                )
              )}
            </div>
          </Fade>
          {!seeMore ? (
            <div className="cert-btn-container">
              <button onClick={handleSeeMore}>
                <p>See More</p>
              </button>
            </div>
          ) : (
            <div className="cert-btn-container">
              <button onClick={handleSeeLess}>
                <p>See Less</p>
              </button>
            </div>
          )}
        </Col>
      </Row>

      <Modal className="modal" centered show={show} onHide={handleClose}>
        <div>
          <Modal.Body>
            <img src={currentImg} />
          </Modal.Body>
        </div>
      </Modal>
    </Container>
  );
};

export default Certificate;
