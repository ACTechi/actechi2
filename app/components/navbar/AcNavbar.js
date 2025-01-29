import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import GetEstimate from '../GetEstimate/GetEstimate';
import BBBAcreditation from '../BBBAcred/BBBAcreditation';

import styles from './AcNavbar.module.css'

function AcNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" variant='secondary'>
      <Container>
        <Navbar.Brand href="#home" className={styles.brand}>
          <img
            alt="AC Techi"
            src="logo.png"
            width="160"
            height="91.43"
            className="d-inline-block align-top"
          />{' '}
          <div className={styles.completeMoto}>
          <p className={styles.moto}>Your Air Conditioning and Heating</p>
          <p className={styles.moto}>Company in Orlando, FL</p>
          </div>
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
              <NavDropdown.Item href="https://calendar.app.google/2baWBm8eQNzo7KRz5" className={styles.contact} target='_blank'>
                <img src='googleMeet.png' alt='schedule a call' className={styles.icon}></img>
                Schedule a call
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <BBBAcreditation /> */}
          <GetEstimate />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AcNavbar;