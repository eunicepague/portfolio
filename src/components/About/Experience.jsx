import { Container, Row, Col } from 'react-bootstrap';

import Circle from './../../assets/circleYellow.png';

import './cute.css';

const Experience = () => {
  return (
    <Container fluid className="experience-container">
      <section id="experience-bg">
        <Row>
          <div id="experience-intro">
            <h1>Education & Experience</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
              impedit!
            </p>
          </div>
          <Row className="vertical-lines-container">
            <Col className="experience-left" xs={5} sm={5} md={5} lg={5}>
              <div id="exp-one">
                <Col id="ex1">
                  <div className="experience-box">
                    <h5>Full Stack Web Dev Graduate</h5>
                    <p>Nov 2023</p>
                    <p>KodeGo Bootcamp</p>
                  </div>
                </Col>
                <Col id="ex2">
                  <div className="experience-box">
                    <h5>FrontEnd Developer Intern</h5>
                    <p>February 2023 - April 2023</p>
                    <p>Highly Succeed Inc.</p>
                  </div>
                </Col>
              </div>
            </Col>
            <Col className="vertical-container" xs={2} sm={2} md={2} lg={2}>
              <div className="vertical-line">
                <img src={Circle} id="circle1" />
                <img src={Circle} id="circle2" />
                <img src={Circle} id="circle3" />
                <img src={Circle} id="circle4" />
                <img src={Circle} id="circle5" />
              </div>
            </Col>
            <Col className="experience-right" xs={5} sm={5} md={5} lg={5}>
              <div id="exp-two">
                <Col id="ex3">
                  <div className="experience-box">
                    <h5>Building Portfolios</h5>
                    <p>Current</p>
                  </div>
                </Col>
                <Col id="ex4">
                  <div className="experience-box">
                    <h5>Bachelors of Science in Computer Science Graduate</h5>
                    <p>October 2023</p>
                    <p>AMACC Makati</p>
                  </div>
                </Col>
                <Col id="ex5">
                  <div className="experience-box">
                    <h5>ICT strand Graduate</h5>
                    <p>April 2019</p>
                    <p>Informatics College Northgate</p>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </Row>
      </section>
    </Container>
  );
};

export default Experience;

// // import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
// import Circle from './../../assets/circle.png';
// import YellowCircle from './../../assets/circleYellow.png';
// import PurpleCircle from './../../assets/circlePurple.png';

// import HTML from './../../assets/html.png';
// import CSS from './../../assets/css.png';
// import JS from './../../assets/javascript.png';
// import React from './../../assets/reactjs.png';
// import Node from './../../assets/nodejs.png';
// import Bootstrap from './../../assets/bootstrap.png';
// import Tailwind from './../../assets/tailwind.png';
// import SASS from './../../assets/sass.png';
// import Git from './../../assets/git.png';
// import API from './../../assets/restapi.png';
// import Vite from './../../assets/vite.png';
// import Vercel from './../../assets/vercel.png';
// import Figma from './../../assets/figma.png';
// import NPM from './../../assets/npm.png';
// import Laravel from './../../assets/laravel.png';
// import PHP from './../../assets/php.png';

// import './Experience.css';

// const Experience = () => {
//   return (
//     <Container className="experience-container">
//       <Row className="experience-content">
//         <div style={{ textAlign: 'center' }}>
//           <h3>My Education & Tech Stacks</h3>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
//             quidem.
//           </p>
//         </div>

//         <Col className="experience-left" sm={12} md={12} lg={6}>
//           <div className="experience-intro">
//             <h4>Education / Experience</h4>
//           </div>

//           <div className="education-container">
//             <div className="vertical-line">
//               <img src={Circle} id="circle1" />
//               <div id="cirle1-content">
//                 <h4>Full Stack Web Development Bootcamp</h4>
//                 <p>2023 - November</p>
//                 <p>KodeGo Bootcamp</p>
//               </div>

//               <img src={Circle} id="circle2" />
//               <div id="cirle2-content">
//                 <h4>Bachelors of Science in Computer Science</h4>
//                 <p>2023 - October</p>
//                 <p>AMACC Makati Campus</p>
//               </div>

//               <img src={YellowCircle} id="yellowCircle1" />

//               <div id="yellowCircle1-content">
//                 <p>Magna Cum Laude</p>
//                 <p>
//                   President Lister {'('}2019-2023{')'}
//                 </p>
//               </div>
//               <img src={YellowCircle} id="yellowCircle2" />

//               <img src={PurpleCircle} id="purpleCircle1" />
//               <div id="purpleCircle1-content">
//                 <h4> FrontEnd Developer Internship</h4>
//                 <p>2023, Feb - April</p>
//                 <p>Highy Succeed </p>
//               </div>

//               <img src={Circle} id="circle3" />
//               <div id="cirle3-content">
//                 <h4>
//                   Information and Computer Technologies {'('} ICT {')'}
//                 </h4>
//                 <p>2019 - April</p>
//                 <p>Informatics College Northgate</p>
//               </div>

//               <img src={YellowCircle} id="yellowCircle3" />

//               <div id="yellowCircle3-content">
//                 <p>Valedictorian / Overall Top 1 ICT strand</p>
//                 <p>With High Honor</p>
//                 <p>Outstanding Performance in Arts</p>
//                 <p>Outstanding Performance in Communication Arts</p>
//                 <p>Outstanding Performance in Mathematics</p>
//                 <p>Leadership and Outstanding Organization Award</p>
//                 <p>Iskolar ng Lungsod ng San Pedro Scholar</p>
//               </div>
//               <img src={YellowCircle} id="yellowCircle4" />
//               <img src={YellowCircle} id="yellowCircle5" />
//               <img src={YellowCircle} id="yellowCircle6" />
//               <img src={YellowCircle} id="yellowCircle7" />
//               <img src={YellowCircle} id="yellowCircle8" />
//               <img src={YellowCircle} id="yellowCircle9" />
//             </div>
//           </div>
//         </Col>
//         <Col className="experience-right" sm={12} md={12} lg={6}>
//           <div className="experience-intro">
//             <h4>Tech Stacks</h4>
//             <Col id="experience-icons">
//               <img src={HTML} />
//               <img src={CSS} />
//               <img src={JS} />
//               <img src={Bootstrap} />
//               <img src={Tailwind} />
//               <img src={SASS} />
//               <img src={React} />
//               <img src={Node} />
//               <img src={Vite} />
//               <img src={Vercel} />
//               <img src={Git} />
//               <img src={API} />
//               <img src={Figma} />
//               <img src={NPM} />
//               <img src={Laravel} />
//               <img src={PHP} />
//             </Col>
//             <Col>Sample</Col>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Experience;
