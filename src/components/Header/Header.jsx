import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './../../assets/mylogo.png';
import Menu from './../../assets/menu-icon.png';

import FB from './../../assets/fb.png';
import Linkedin from './../../assets/linkedin.png';
import Instagram from './../../assets/instagram.png';
import Github from './../../assets/github.png';
import './Header.css';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container
        fluid
        className="header-container d-sm-none d-md-flex d-lg-flex"
      >
        <section className="header-content">
          <Navbar
            fixed="top"
            id="navbar-nav"
            className="justify-content-between"
          >
            <a href="#hero">
              <Navbar.Brand id="brand">
                <img src={Logo} id="mylogo" />
              </Navbar.Brand>
            </a>
            <Nav
              className="justify-content-end"
              id="nav-links"
              activeKey="/home"
            >
              <Nav.Item>
                <Nav.Link href="#hero">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#project">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#footer">Contact Us</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar>
        </section>
      </Container>

      <Container
        fluid
        className="offcanvas-container d-lg-none d-md-none d-sm-flex"
      >
        <section className="offcanvas-content">
          <img src={Menu} onClick={handleShow} />

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <a href="/home">
                  <Navbar.Brand id="offcanvas-logo">
                    <img src={Logo} />
                  </Navbar.Brand>
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav id="offcanvas-links" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/home">Contact Us</Nav.Link>
                </Nav.Item>
              </Nav>

              <div id="offcanvas-icons-container">
                <Link
                  to="https://www.linkedin.com/in/eunice-grace-pague-177324266/"
                  target="_blank"
                >
                  <img src={Linkedin} />
                </Link>

                <Link
                  to="https://www.facebook.com/eunice.pague"
                  target="_blank"
                >
                  <img src={FB} />
                </Link>

                <Link to="https://www.instagram.com/_mmcutie/" target="_blank">
                  <img src={Instagram} />
                </Link>

                <Link to="https://github.com/eunicepague" target="_blank">
                  <img src={Github} />
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </section>
      </Container>
    </>
  );
}

export default Header;
