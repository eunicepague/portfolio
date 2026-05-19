import { useState, useEffect } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import "./Certificate.css";

import Educ1 from "./../../assets/Education/OJT.jpg";
import Educ2 from "./../../assets/Education/Bootcamp.jpg";

import Skill1 from "./../../assets/Skill/html essential training.png";
import Skill2 from "./../../assets/Skill/introduction to CSS.png";
import Skill3 from "./../../assets/Skill/javascript essential training.png";
import Skill4 from "./../../assets/Skill/boostrap five essential training.png";
import Skill5 from "./../../assets/Skill/reactjs essential training.png";
import Skill6 from "./../../assets/Skill/learning git and github.png";
import Skill7 from "./../../assets/Skill/learning rest APIs.png";
import Skill8 from "./../../assets/Skill/php essential training.png";
import Skill9 from "./../../assets/Skill/laravel essential training.png";
import Skill10 from "./../../assets/Skill/building RESTful APIs in Laravel.png";
import Skill11 from "./../../assets/Skill/excel formulas and function quick tips.png";
import Skill12 from "./../../assets/Skill/excel pivottables for beginners.png";

const Certificate = () => {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState("");
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
    setNumImagesDisplayed(5);
    setSeeMore(false);
  };

  useEffect(() => {
    if (window.matchMedia("(min-width: 992px)").matches) {
      setNumImagesDisplayed(12);
    }
  }, []);

  const certificates = [
    {
      image: Educ1,
      title: "Full Stack Development",
      type: "Training",
    },
    {
      image: Educ2,
      title: "HTML Essential Training",
      type: "Frontend",
    },
    {
      image: Skill1,
      title: "HTML Essential Training",
      type: "Frontend",
    },
    {
      image: Skill2,
      title: "Introduction to CSS",
      type: "Frontend",
    },
    {
      image: Skill3,
      title: "JavaScript Essential Training",
      type: "Frontend",
    },
    {
      image: Skill4,
      title: "Bootstrap 5 Essential Training",
      type: "Frontend",
    },
    {
      image: Skill5,
      title: "ReactJS Essential Training",
      type: "Frontend",
    },
    {
      image: Skill6,
      title: "Learning Git & GitHub",
      type: "Backend",
    },
    {
      image: Skill7,
      title: "Learning REST APIs",
      type: "Backend",
    },
    {
      image: Skill8,
      title: "PHP Essential Training",
      type: "Backend",
    },
    {
      image: Skill9,
      title: "Laravel 10 Essential Training",
      type: "Backend",
    },
    {
      image: Skill10,
      title: "Building RESTful APIs in Laravel",
      type: "Backend",
    },
    {
      image: Skill11,
      title: "Excel Formulas and Functions",
      type: "Tools",
    },
    {
      image: Skill12,
      title: "Excel PivotTables for Beginners",
      type: "Tools",
    },
  ];

  const displayedCertificates = seeMore
    ? certificates
    : certificates.slice(0, numImagesDisplayed);

  return (
    <Container fluid className="certificate-container" id="certificates">
      <Row className="certificate-content">
        <div className="certificate-intro">
          <p className="certificate-label">✦ Certifications ✦</p>

          <h1>
            My <span>Certificates.</span>
          </h1>

          <p>
            Equipped with numerous certifications, I bring validated expertise
            to the evolving tech landscape.
          </p>
        </div>

        <Col>
          <Fade cascade damping={0.05} triggerOnce>
            <div className="cert-img-container">
              {displayedCertificates.map((cert, index) => (
                <div className="cert-card" key={index}>
                  <div className="cert-img-wrapper">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onClick={() => handleShow(cert.image)}
                    />
                  </div>

                  <div className="cert-card-footer">
                    <h3>{cert.title}</h3>
                    <span>{cert.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          <div className="cert-btn-container">
            {!seeMore ? (
              <button onClick={handleSeeMore}>
                View All Certificates <span>→</span>
              </button>
            ) : (
              <button onClick={handleSeeLess}>
                See Less <span>↑</span>
              </button>
            )}
          </div>
        </Col>
      </Row>

      <Modal className="cert-modal" centered show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={currentImg} alt="Certificate Preview" />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Certificate;
