import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from './NavBarForm.module.css'

function NavBarForm() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top" variant='secondary'>
                <Container className='d-flex justify-content-center'>
                    <Navbar.Brand href="/" className={styles.brand}>
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
                    <Navbar.Collapse id="basic-navbar-nav" className={styles.contactUs}>
                        <Nav>
                            <Nav.Link href="tel:+14072420908" className={styles.contact}><img src='phoneHome.png' alt='call us' className={styles.icon}></img>Call Us</Nav.Link>
                            <Nav.Link href="https://calendar.app.google/2baWBm8eQNzo7KRz5" className={styles.contact} target='_blank'>
                                <img src='googleMeet.png' alt='schedule a call' className={styles.icon}></img>
                                Schedule a call
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarForm;