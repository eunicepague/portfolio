import { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
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

  const handleClose = () => setShow(false);
  const handleShow = (img) => {
    setCurrentImg(img);
    setShow(true);
  };

  return (
    <Container fluid className="certificate-container">
      <Row className="certificate-content">
        <h1>My certificates.</h1>

        <Col>
          <div className="cert-img-container">
            <img src={Educ1} onClick={() => handleShow(Educ1)} />
            <img src={Educ2} onClick={() => handleShow(Educ2)} />
            <img src={Skill1} onClick={() => handleShow(Skill1)} />
            <img src={Skill2} onClick={() => handleShow(Skill2)} />
            <img src={Skill3} onClick={() => handleShow(Skill3)} />
            <img src={Skill4} onClick={() => handleShow(Skill3)} />
            <img src={Skill5} onClick={() => handleShow(Skill3)} />
            <img src={Skill6} onClick={() => handleShow(Skill3)} />
            <img src={Skill7} onClick={() => handleShow(Skill3)} />
            <img src={Skill8} onClick={() => handleShow(Skill3)} />
            <img src={Skill9} onClick={() => handleShow(Skill3)} />
            <img src={Skill10} onClick={() => handleShow(Skill3)} />
            <img src={Skill11} onClick={() => handleShow(Skill3)} />
            <img src={Skill12} onClick={() => handleShow(Skill3)} />
          </div>

          {/* <div className="cert-btn-container">
            <button>
              <p>See More</p>
            </button>
          </div> */}
        </Col>
      </Row>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>My Certificate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={currentImg} style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Certificate;
