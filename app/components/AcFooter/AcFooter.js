import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import styles from './AcFooter.module.css'


export default function AcFooter() {
    return (
        <footer className='text-center text-lg-start text-muted' style={{ backgroundColor: '#77777A' }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block d-flex align-items-center'>
                    <span className='text-light'>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='https://goo.gl/maps/c1d3KRTTGKzyhPXj9?coh=178573&entry=tt' className='me-4 text-reset fs-2 text' target='_blank'>
                        <img src='googlemapsIcon.png' alt='google map' className={styles.map}></img>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=14072420908&text=I'm%20interested%20in%20more%20information%20about%20your%20services,%20please&type=phone_number&app_absent=0" className='me-4 text-reset fs-2 text' target='_blank'>
                        <img src='whatsapp.png' alt='google map' className={styles.map}></img>
                    </a>
                    <a href='https://www.facebook.com/ac.techi.7' className='me-4 text-reset fs-2 text' target='_blank'>
                        <img src='facebook.png' alt='google map' className={styles.map}></img>
                    </a>
                    <a href='https://www.instagram.com/actechifl/' className='me-4 text-reset fs-2 text' target='_blank'>
                        <img src='instagramIcon.png' alt='google map' className={styles.map}></img>
                    </a>
                </div>
            </section>
            <section className='text-light'>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <div className={styles.logoDiv}>
                                <a href='#home'><img src='logofooter.png' alt='AC Techi logo'></img></a>
                                <p>Your Air Conditioning and Heating</p>
                                <p>Company in Orlando, FL</p>
                            </div>
                        </Col>

                        <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            {/* <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6> */}
                            <p>
                                <a href='#home' className='text-reset'>
                                    Home
                                </a>
                            </p>
                            <p>
                                <a href='#services' className='text-reset'>
                                    Services
                                </a>
                            </p>
                            <p>
                                <a href='#financing' className='text-reset'>
                                    Financing
                                </a>
                            </p>
                            <p>
                                <a href='#faqs' className='text-reset'>
                                    FAQs
                                </a>
                            </p>
                        </Col>

                        <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Business Hours</h6>
                            <p>
                                Monday - Friday
                            </p>
                            <p>
                                9:00 am - 5:00 pm
                            </p>
                        </Col>

                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <a href='tel:+14072420908' className={styles.anchor}>
                                    (407) 242-0908,
                                </a>
                            </p>
                            <p>
                                <a href='tel:+13219725978' className={styles.anchor}>
                                    (321) 972-5978
                                </a>
                            </p>
                            <p>
                                <a href='mailto:info@actechi.com' target='_blank' className={styles.anchor}>
                                    info@actechi.com
                                </a>
                            </p>
                            <p>
                                <a href="//maps.apple.com/?address=2721%20Forsyth%20Rd,%20Orlando,%20FL%20%2032792,%20United%20States&ll=28.583366,-81.293533&q=AC%20Techi" target='_blank' className={styles.anchor}>
                                    2721 Forsyth Rd #351 Winter Park, Florida 32792
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className='text-center p-4 d-flex justify-content-around' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: '#FFFFFF' }}>
                <a href='https://drive.google.com/file/d/1310s56y_hWQRz8bkI7fmq9sIPKfdtr0G/view?usp=sharing' className={styles.anchor} target='_blank'>Private Policy</a>
                <p className={styles.links}>© 2023 AC Techi</p>
                <p className={styles.links}>Use of this site is subject to our <a href='https://drive.google.com/file/d/1v7ztLT-Lx-Unp7mYPH_RzJClRMK6LEvL/view?usp=sharing' className={styles.anchor} target='_blank'>Terms of Use</a></p>
            </div>
        </footer>
    )
}