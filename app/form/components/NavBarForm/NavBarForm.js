import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import styles from './NavBarForm.module.css'

function NavBarForm() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" fixed="top" variant='secondary'>
            <Container className='d-flex justify-content-center'>
                <Navbar.Brand href="#home" className={styles.brand}>
                    <img
                        alt="AC Techi"
                        src="logo.png"
                        width="160"
                        height="91.43"
                        className="d-inline-block align-top"
                    />{' '}
                    <p className={styles.moto}>Your Air Conditioning and Heating</p>
                    <p className={styles.moto}>Company in Orlando, FL</p>
                </Navbar.Brand>
            </Container>
        </Navbar>
        </>
    );
}

export default NavBarForm;