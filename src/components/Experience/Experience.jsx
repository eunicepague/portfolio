import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

import "./cute.css";

const Experience = () => {
  const timeline = [
    {
      title: "Software Developer",
      date: "January 2026 - April 2026",
      place: "Fujitsu Engineering Technology Ph",
      type: "Work",
      icon: "💻",
      side: "left",
    },
    {
      title: "MS Engineer",
      date: "April 2024 - August 2025",
      place: "MDC",
      type: "Work",
      icon: "🖥️",
      side: "right",
    },
    {
      title: "Full Stack Web Dev Graduate",
      date: "Nov 2023",
      place: "KodeGo Bootcamp",
      type: "Bootcamp",
      icon: "🎓",
      side: "left",
    },
    {
      title: "Bachelor of Science in Computer Science",
      date: "October 2023",
      place: "AMACC Makati",
      type: "Education",
      icon: "🎓",
      side: "right",
    },
    {
      title: "FrontEnd Developer Intern",
      date: "February 2023 - April 2023",
      place: "Highly Succeed Inc.",
      type: "Internship",
      icon: "💼",
      side: "left",
    },
    {
      title: "ICT strand Graduate",
      date: "April 2019",
      place: "Informatics College Northgate",
      type: "Education",
      icon: "🏅",
      side: "right",
    },
  ];

  return (
    <Container fluid className="experience-container" id="experience">
      <section className="experience-content">
        <div className="experience-intro">
          <p className="experience-label">✦ My Journey ✦</p>
          <h1>
            Education <span>& Experience</span>
          </h1>
          <p>
            Building on my education and work history, I’m constantly evolving
            in the tech industry.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {timeline.map((item, index) => (
            <div className={`timeline-item ${item.side}`} key={index}>
              <div className="timeline-dot"></div>

              <Slide
                direction={item.side === "left" ? "left" : "right"}
                triggerOnce
              >
                <div className="experience-box">
                  <div className="experience-icon">{item.icon}</div>

                  <div className="experience-details">
                    <span className="experience-type">{item.type}</span>
                    <h5>{item.title}</h5>
                    <p className="experience-date">{item.date}</p>
                    <p className="experience-place">{item.place}</p>
                  </div>
                </div>
              </Slide>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Experience;
