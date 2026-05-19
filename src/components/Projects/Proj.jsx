import { Container } from "react-bootstrap";
import "./Proj.css";

import Proj1 from "./../../assets/p1.png";
import Proj2 from "./../../assets/p2.png";
import Proj3 from "./../../assets/p3.png";
import TrekTok from "./../../assets/TrekTok.png";

const Proj = () => {
  const projects = [
    {
      number: "01",
      image: TrekTok,
      icon: "✈️",
      title: "TrekTok Travel Management System",
      description:
        "A Spring MVC and MyBatis-based tour and travel management system with user registration, email verification, login, booking, payment, feedback, and admin management features. This project helped me practice full-stack development, database integration, and role-based access control.",
      skills: [
        "Java",
        "Spring MVC",
        "MyBatis",
        "PostgreSQL",
        "JSP",
        "Bootstrap",
      ],
      link: "#",
    },
    {
      number: "02",
      image: Proj1,
      icon: "🌐",
      title: "The Ordinary Website",
      description:
        "A clean and modern e-commerce website built to showcase The Ordinary products and information. Focused on product clarity, simple layout, and a smooth browsing experience.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JS",
        "ReactJs",
        "NodeJs",
        "PHP",
        "Laravel",
      ],
      link: "https://trektok.onrender.com/home",
    },
    {
      number: "03",
      image: Proj2,
      icon: "🧁",
      title: "The Good Shepherd Sweets",
      description:
        "An interactive cake shop website with a delightful UI/UX. It includes a dynamic product catalog, order form, and smooth user interactions for a seamless browsing and ordering experience.",
      skills: ["HTML", "CSS", "Bootstrap", "JS"],
      link: "https://the-ordinary.vercel.app",
    },
    {
      number: "04",
      image: Proj3,
      icon: "👩‍🍳",
      title: "How To Bake It",
      description:
        "A recipe blog website featuring a collection of baked good recipes. Integrated with a RESTful API for dynamic content management, offering a rich and engaging user experience.",
      skills: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JS",
        "ReactJs",
        "NodeJs",
        "PHP",
        "Laravel",
      ],
      link: "https://how-to-bake-it-recipes.vercel.app",
    },
  ];

  return (
    <Container fluid className="proj-container" id="project">
      <section className="proj-content">
        <div className="proj-intro">
          <p className="proj-label">✦ Portfolio ✦</p>
          <h1>
            My <span>Projects.</span>
          </h1>
          <p className="proj-subtitle">
            A selection of my recent work that reflects my skills, creativity,
            and commitment to building meaningful digital experiences.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-card" key={project.number}>
              <div className="project-number">
                <span>✦</span>
                {project.number}
              </div>

              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-divider"></div>

              <div className="project-details">
                <div className="project-title-row">
                  <div className="project-icon">{project.icon}</div>
                  <h3>{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-line"></div>

                <p className="tech-label">Tech Stack</p>

                <div className="skill-set">
                  {project.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="project-action">
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="project-connect">
          <span>✦</span>
          <p>Interested in working together?</p>
          <a href="#contact">Let’s Connect!</a>
          <span>→</span>
        </div>
      </section>
    </Container>
  );
};

export default Proj;
