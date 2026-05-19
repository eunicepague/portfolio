import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import "./About.css";
import Me from "./../../assets/feb23.jpeg";

const About = () => {
  return (
    <Container fluid className="about-container" id="about">
      <section className="about-content">
        <div className="about-left">
          <div className="about-img-bg"></div>

          <div className="about-img-wrapper">
            <img src={Me} alt="Eunice Pague" />
          </div>

          <div className="about-profile-card">
            <div className="about-profile-icon">💻</div>
            <div>
              <h4>Software Developer</h4>
            </div>
          </div>
        </div>

        <div className="about-right">
          <Fade triggerOnce>
            <p className="about-label">♥ Get to know me</p>

            <h1>
              About <span>Me</span>
            </h1>

            <p className="about-main-text">
              I’m a Computer Science graduate, Magna Cum Laude, with a strong
              focus on web development and a passion for creating clean,
              user-friendly digital experiences.
            </p>

            <p className="about-description">
              I worked as a Software Developer at Fujitsu Engineering Technology
              Ph from January 2026 to April 2026, and as an MS Engineer from
              April 2024 to August 2025. These experiences helped me improve my
              technical skills, problem-solving mindset, and ability to build
              practical solutions.
            </p>

            <p className="about-description">
              I enjoy turning ideas into functional and beautiful websites. Some
              of the projects I’m proud of include TrekTok Travel Management
              System, The Ordinary Website, The Good Shepherd Sweets, and How To
              Bake It.
            </p>

            <p className="about-description">
              I love coding, continuous learning, and the challenge of building
              solutions that make a difference. I’m excited to bring my skills,
              creativity, and dedication to a team where I can grow and make an
              impact as a developer.
            </p>

            <div className="about-btn">
              <a href="#footer" className="about-primary-btn">
                Let’s Connect <span>→</span>
              </a>

              <a href="#project" className="about-secondary-btn">
                View Projects <span>→</span>
              </a>
            </div>
          </Fade>
        </div>
      </section>
    </Container>
  );
};

export default About;
