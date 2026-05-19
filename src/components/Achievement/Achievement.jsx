import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

import Me from "./../../assets/gradpic.jpg";
import "./Achievement.css";

const Achievement = () => {
  const academic = [
    "Magna Cum Laude (2023)",
    "KodeGo Bootcamp Graduate Batch WD81 2023",
    "With High Honor / Overall Top 1 in ICT course",
    "Outstanding Performance in Arts",
    "Outstanding Performance in Communication Arts",
    "Outstanding Performance in Mathematics",
  ];

  const leadership = [
    "Leadership and Outstanding Organization Award",
    "President Lister (2019-2023)",
    "MilleniA.R.T.S Club - President (2019)",
    "MilleniA.R.T.S Club - Secretary (2018)",
  ];

  const recognition = [
    "Iskolar ng Lungsod ng San Pedro (ILSP) scholar",
    "CHED Stufaps Scholar",
  ];

  return (
    <Container fluid className="achievement-container" id="achievements">
      <section className="achievement-content">
        <div className="achievement-photo-area">
          <div className="achievement-photo-shape"></div>

          <div className="achievement-img-container">
            <img src={Me} alt="Graduation" />
          </div>
        </div>

        <div className="achievement-info-area">
          <p className="achievement-label">My Journey ✦</p>

          <h1>
            Achievements<span>.</span>
          </h1>

          <p className="achievement-subtitle">
            A collection of milestones, recognitions, and accomplishments that
            reflect dedication, passion, and purpose.
          </p>

          <Fade cascade damping={0.08} triggerOnce>
            <div className="achievement-groups">
              <div className="achievement-group">
                <div className="achievement-group-title">
                  <div className="achievement-icon">🎓</div>
                  <h3>Academic</h3>
                </div>

                <div className="achievement-grid">
                  {academic.map((item, index) => (
                    <div className="achievement-item" key={index}>
                      <span>✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="achievement-group">
                <div className="achievement-group-title">
                  <div className="achievement-icon pink">♛</div>
                  <h3>Leadership</h3>
                </div>

                <div className="achievement-grid">
                  {leadership.map((item, index) => (
                    <div className="achievement-item" key={index}>
                      <span>✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="achievement-group">
                <div className="achievement-group-title">
                  <div className="achievement-icon">🏅</div>
                  <h3>Honors & Recognition</h3>
                </div>

                <div className="achievement-grid one-column">
                  {recognition.map((item, index) => (
                    <div className="achievement-item" key={index}>
                      <span>✓</span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </Container>
  );
};

export default Achievement;
