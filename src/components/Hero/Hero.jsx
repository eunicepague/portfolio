import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import Me from "./../../assets/eunicepague.png";
import FB from "./../../assets/fb.png";
import Linkedin from "./../../assets/linkedin.png";
import Instagram from "./../../assets/instagram.png";
import Github from "./../../assets/github.png";

import "./Hero.css";

const Hero = () => {
  return (
    <Container fluid className="hero-container" id="hero">
      <section className="hero-content">
        <div className="hero-left">
          <Fade direction="left" triggerOnce>
            <div className="hero-intro">
              <p className="hero-label">✦ Software Developer ✦</p>

              <h1>
                Hello, I&apos;m <span>Eunice Pague!</span>
              </h1>

              <div className="hero-line"></div>

              <p className="hero-description">
                Hello! I’m Eunice Grace Pague, a Magna Cum Laude Computer
                Science graduate with experience as a Software Developer and MS
                Engineer. I enjoy building clean, user-friendly web applications
                while continuously improving my skills in Java, Spring MVC,
                MyBatis, PostgreSQL, React, and full-stack development.
              </p>

              <div className="hero-btn-container">
                <a href="#techstacks" className="hero-primary-btn">
                  Get Started <span>→</span>
                </a>

                <a
                  href="/resume/Eunice-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-secondary-btn"
                >
                  View Resume <span>↗</span>
                </a>
              </div>
            </div>
          </Fade>
        </div>

        <div className="hero-right">
          <Fade direction="right" triggerOnce>
            <div className="hero-photo-area">
              <div className="hero-photo-bg"></div>

              <div className="hero-img-container">
                <img src={Me} alt="Eunice Pague" />
              </div>

              <div className="hero-socials">
                <Link
                  to="https://www.linkedin.com/in/eunice-grace-pague-177324266/"
                  target="_blank"
                >
                  <img src={Linkedin} alt="LinkedIn" />
                </Link>

                <Link
                  to="https://www.facebook.com/eunice.pague"
                  target="_blank"
                >
                  <img src={FB} alt="Facebook" />
                </Link>

                <Link to="https://www.instagram.com/_mmcutie/" target="_blank">
                  <img src={Instagram} alt="Instagram" />
                </Link>

                <Link to="https://github.com/eunicepague" target="_blank">
                  <img src={Github} alt="GitHub" />
                </Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
