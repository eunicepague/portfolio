import { Container, Row, Col } from 'react-bootstrap';
import './Proj.css';

import { Link } from 'react-router-dom';

import Proj1 from './../../assets/p1.png';
import Proj2 from './../../assets/p2.png';
import Proj3 from './../../assets/p3.png';
import Proj4 from './../../assets/p4.png';

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
                <Link to="https://the-ordinary.vercel.app">
                  <button id="project-button">
                    View Me
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </Link>
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
                <Link to="https://the-ordinary.vercel.app">
                  <button id="project-button">
                    View Me
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </Link>
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
                “How to Bake It” is a recipe blog website that I’ve been
                developing using ReactJS and PHP Laravel. This project is
                integrated with a mock-up RESTful API, which I have designed and
                implemented from scratch. This hands-on experience has been
                pivotal in my journey towards mastering API implementation,
                particularly RESTful APIs, and enhancing my proficiency in PHP
                Laravel. Despite the project still being under development, I
                have made substantial progress in comprehending the subtleties
                of working with RESTful APIs and implementing them using PHP
                Laravel. As I persistently refine the features and
                functionalities of this platform, I am continually learning and
                adopting best practices in API design and usage. Stay tuned for
                more updates as I persist in my endeavor to further my expertise
                in RESTful API implementation and PHP Laravel through this
                project
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
                <Link to="https://how-to-bake-it-recipes.vercel.app">
                  <button id="project-button">
                    View Me
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="project-container">
          <Col className="proj-img" md={12} lg={6}>
            <img src={Proj4} />
          </Col>
          <Col className="proj-img-content" md={12} lg={6}>
            <div>
              <h3>My To-Do-List Webiste</h3>
              <p className="mt-4">
                The To-Do-List website is a single-page application designed to
                help users manage their tasks efficiently. It serves as a
                personal digital checklist, simplifying life and promoting
                organization. The frontend of the website is built with ReactJS,
                ensuring a dynamic user interface. The backend operations are
                handled by NodeJS, providing robust data management. The
                website’s design is enhanced with vanilla SCSS, offering a clean
                and user-friendly experience. A mock-up json-server is
                implemented for data storage, and Restful APIs are used for data
                manipulation. This project has been a significant learning
                experience, particularly in the application of Restful APIs.
              </p>
            </div>

            <div className="proj-btn-content">
              <div className="skill-set">
                <p>Skill set: </p>
                <button>HTML</button>
                <button>Vanilla SASS</button>
                <button>JS</button>
                <button>ReactJs</button>
                <button>NodeJs</button>
              </div>
              <div>
                <Link to="https://my-own-to-do-list.vercel.app">
                  <button id="project-button">
                    View Me
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Proj;
