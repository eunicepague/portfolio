import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

import Me from './../../assets/feb23.jpeg';
import Open from '././../../assets/open-quote.png';
import Close from '././../../assets/close-quote.png';

const About = () => {
  return (
    <Container fluid className="about-container" id="about">
      <section className="about-content">
        <Row>
          <Col className="about-left">
            <img src={Me} />
          </Col>
          <Col className="about-right" lg={8}>
            <h1>About me</h1>

            <p>
              <img src={Open} className="quote" />
              I am a Computer Science fresh graduate focused on web development,
              with a magna cum laude distinction and a track record of academic
              excellence. I have a passion for coding, gaming, and exploring new
              programming languages in my free time. I have also completed
              several web development projects that demonstrate my skills and
              creativity. As an aspiring front-end developer, I find joy in
              merging art and technology, seamlessly weaving creativity into
              code to construct visually captivating and user-friendly digital
              experiences, which I believe adds value to my web design and user
              interface. I’m currently looking for new opportunities in web
              development where I can apply my skills and learn new things.
              <img src={Close} className="quote" />
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default About;
