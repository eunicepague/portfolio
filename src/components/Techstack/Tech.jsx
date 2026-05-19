import { Container } from "react-bootstrap";

import "./Tech.css";

import HTML from "./../../assets/html.png";
import CSS from "./../../assets/css.png";
import JS from "./../../assets/javascript.png";
import Bootstrap from "./../../assets/bootstrap.png";
import ReactLogo from "./../../assets/reactjs.png";
import JSP from "./../../assets/jsp.png";

import Java from "./../../assets/java.png";
import SpringMVC from "./../../assets/springmvc.png";
import MyBatis from "./../../assets/mybatis.png";
import Csharp from "./../../assets/csharp.png";
import PHP from "./../../assets/php.png";
import ASPNet from "./../../assets/aspnet.png";
import Laravel from "./../../assets/laravel.png";
import Node from "./../../assets/nodejs.png";
import API from "./../../assets/restapi.png";
import Postgres from "./../../assets/postgres.png";
import MySql from "./../../assets/mysql.png";
import JDBC from "./../../assets/jdbc.png";
import Hibernate from "./../../assets/hibernate.png";

import Git from "./../../assets/git.png";
import Maven from "./../../assets/maven.png";
import Eclipse from "./../../assets/eclipse.png";
import Vscode from "./../../assets/vscode.png";
import Postman from "./../../assets/postman.png";
import Junit from "./../../assets/junit.png";
import Mockito from "./../../assets/mockito.png";

const Tech = () => {
  const frontend = [
    { name: "HTML5", img: HTML },
    { name: "CSS3", img: CSS },
    { name: "JavaScript", img: JS },
    { name: "Bootstrap", img: Bootstrap },
    { name: "React", img: ReactLogo },
    { name: "JSP", img: JSP },
  ];

  const backend = [
    { name: "Java", img: Java },
    { name: "Spring MVC", img: SpringMVC },
    { name: "MyBatis", img: MyBatis },
    { name: "C#", img: Csharp },
    { name: "ASP.NET", img: ASPNet },
    { name: "PHP", img: PHP },
    { name: "Laravel", img: Laravel },
    { name: "Node.js", img: Node },
    { name: "REST API", img: API },
  ];

  const database = [
    { name: "PostgreSQL", img: Postgres },
    { name: "MySQL", img: MySql },
    { name: "JDBC", img: JDBC },
    { name: "Hibernate", img: Hibernate },
  ];

  const tools = [
    { name: "Git", img: Git },
    { name: "Maven", img: Maven },
    { name: "Eclipse", img: Eclipse },
    { name: "VS Code", img: Vscode },
    { name: "Postman", img: Postman },
    { name: "JUnit 5", img: Junit },
    { name: "Mockito", img: Mockito },
  ];

  const learning = [
    { name: "Spring Core", text: "Spring" },
    { name: "Deployment Basics", text: "☁️" },
    { name: "Docker Basics", text: "🐳" },
    { name: "More Java Web Development", text: "Java" },
  ];

  const renderTechItem = (tech) => (
    <div className="tech-item" key={tech.name}>
      {tech.img ? (
        <img src={tech.img} alt={tech.name} />
      ) : (
        <div className="tech-text-icon">{tech.text}</div>
      )}
      <span>{tech.name}</span>
    </div>
  );

  return (
    <Container fluid className="techstack-container" id="techstacks">
      <section className="techstack-content">
        <div className="techstack-intro">
          <p className="techstack-label">✦ My Toolkit ✦</p>

          <h1>
            Tech <span>Stacks.</span>
          </h1>

          <p>
            Technologies I use to build responsive web applications, backend
            systems, database-driven solutions, testing workflows, and deployed
            projects.
          </p>
        </div>

        <div className="tech-card-grid">
          <div className="tech-category-card">
            <div className="tech-category-header">
              <div className="tech-category-icon">💻</div>
              <h2>Frontend Development</h2>
            </div>

            <div className="tech-items">{frontend.map(renderTechItem)}</div>
          </div>

          <div className="tech-category-card">
            <div className="tech-category-header">
              <div className="tech-category-icon purple">🧩</div>
              <h2>Backend & Full-Stack</h2>
            </div>

            <div className="tech-items">{backend.map(renderTechItem)}</div>
          </div>

          <div className="tech-category-card">
            <div className="tech-category-header">
              <div className="tech-category-icon purple">🗄️</div>
              <h2>Database & Persistence</h2>
            </div>

            <div className="tech-items">{database.map(renderTechItem)}</div>
          </div>

          <div className="tech-category-card">
            <div className="tech-category-header">
              <div className="tech-category-icon">🛠️</div>
              <h2>Tools & Practices</h2>
            </div>

            <div className="tech-items">{tools.map(renderTechItem)}</div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Tech;
