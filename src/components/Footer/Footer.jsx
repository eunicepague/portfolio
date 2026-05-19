import { Container, Nav } from "react-bootstrap";

import Linkedin from "./../../assets/linkedin-cl.png";
import Facebook from "./../../assets/fb-cl.png";
import Instagram from "./../../assets/instagram-cl.png";
import Github from "./../../assets/github-cl.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container" id="footer">
      <Container className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            {/* <div className="footer-monogram">EP</div> */}

            <h2>Eunice Pague</h2>
            <p className="footer-role">Software Developer</p>
            {/* <p className="footer-desc">
              I craft beautiful, functional, and user-centered digital
              experiences.
            </p> */}
          </div>

          <div className="footer-column">
            <h4>Navigation</h4>

            <Nav className="footer-nav">
              <Nav.Link href="#hero">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
            </Nav>
          </div>

          <div className="footer-column footer-contact">
            <h4>Contact</h4>

            <div className="footer-contact-item">
              <span>Phone</span>
              <a href="tel:+639107888915">+639107888915</a>
            </div>

            <div className="footer-contact-item">
              <span>Email</span>
              <a href="mailto:eunicegracepague@gmail.com">
                eunicegracepague@gmail.com
              </a>
            </div>
          </div>

          <div className="footer-column footer-social">
            <h4>Connect</h4>

            <div className="footer-logo-container">
              <a
                href="https://www.linkedin.com/in/eunice-grace-pague-177324266/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={Linkedin} alt="LinkedIn" />
              </a>

              <a
                href="https://www.facebook.com/eunice.pague"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src={Facebook} alt="Facebook" />
              </a>

              <a
                href="https://www.instagram.com/_mmcutie/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src={Instagram} alt="Instagram" />
              </a>

              <a
                href="https://github.com/eunicepague"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={Github} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2026 Eunice Pague. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
