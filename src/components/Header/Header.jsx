import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from './../../assets/mylogo.png';

import './Header.css';

function Header() {
  return (
    <>
      <Container fluid className="header-container">
        <section className="header-content">
          <Navbar
            fixed="top"
            id="navbar-nav"
            className="justify-content-between"
          >
            <a href="/home">
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
          </Navbar>
        </section>
      </Container>
    </>
  );
}

export default Header;
