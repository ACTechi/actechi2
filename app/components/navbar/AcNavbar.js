import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import styles from './AcNavbar.module.css'

function AcNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
        <img
              alt="AC Techi"
              src="logo.png"
              width="160"
              height="91.43"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><p className={styles.link}>Home</p></Nav.Link>
            <Nav.Link href="#services"><p className={styles.link}>Services</p></Nav.Link>
            <Nav.Link href="#financing"><p className={styles.link}>Financing</p></Nav.Link>
            <Nav.Link href="#faqs"><p className={styles.link}>FAQs</p></Nav.Link>
            <NavDropdown title="Contac Us" id="basic-nav-dropdown" className={styles.link}>
              <NavDropdown.Item href="tel:+14072420908" className={styles.contact}><img src='phoneHome.png' alt='call us' className={styles.icon}></img>Call Us</NavDropdown.Item>
              <NavDropdown.Item href="https://calendly.com/actechi/30min" className={styles.contact}>
                <img src='googleMeet.png' alt='schedule a call' className={styles.icon}></img>
              Schedule a call
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
          <Nav>
            <Nav.Link href='/form'>
          <Button variant="primary" className={styles.button}>Get Estimate</Button>{' '}
          </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default AcNavbar;