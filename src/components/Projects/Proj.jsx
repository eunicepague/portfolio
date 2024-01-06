import { Container, Row, Col } from 'react-bootstrap';
import './Proj.css';

import Proj1 from './../../assets/p1.png';
import Proj2 from './../../assets/p2.png';
import Proj3 from './../../assets/p3.png';

const Proj = () => {
  return (
    <Container fluid className="proj-container" id="project">
      <section className="proj-content">
        <div className="proj-intro">
          <h1>Projects.</h1>
          <p>
            My recent projects showcase my evolving skills and commitment to
            innovative tech solutions.
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

        <Row className="project-container">
          <Col className="proj-img" md={12} lg={6}>
            <img src={Proj3} />
          </Col>
          <Col className="proj-img-content" md={12} lg={6}>
            <div>
              <h3>How To Bake It</h3>
              <p className="mt-4">
                “How to Cake It” is a recipe blog website that I’ve developed
                using ReactJS. It’s integrated with a mock-up API that I created
                myself. This platform has been instrumental in honing my skills
                in API fetching. Although it’s still under development, I’ve
                made significant strides in mastering the intricacies of API
                integration. Stay tuned for more updates as I continue to
                enhance its features and functionalities.
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
