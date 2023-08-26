import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function AcFooter() {
    return (
        <MDBFooter bgColor='none' className='text-center text-lg-start text-muted' style={{ backgroundColor:'#77777A' }}>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span className='text-light'>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset fs-2 text'>
                        <MDBIcon fab icon="facebook-f" style={{ color:'#FFFFFF' }}/>
                    </a>
                    <a href='' className='me-4 text-reset fs-2 text'>
                        <MDBIcon fab icon="twitter" style={{ color:'#FFFFFF' }}/>
                    </a>
                    <a href='' className='me-4 text-reset fs-2 text'>
                        <MDBIcon fab icon="google" style={{ color:'#FFFFFF' }}/>
                    </a>
                    <a href='' className='me-4 text-reset fs-2 text'>
                        <MDBIcon fab icon="instagram"  style={{ color:'#FFFFFF' }}/>
                    </a>
                    <a href='' className='me-4 text-reset fs-2 text'>
                        <MDBIcon fab icon="linkedin" style={{ color:'#FFFFFF' }}/>
                    </a>
                    <a href='' className='me-4 text-reset fs-2 text'>
                        <MDBIcon fab icon="github" style={{ color:'#FFFFFF' }}/>
                    </a>
                </div>
            </section>

            <section className='text-light'>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Company name
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful Links</h6>
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
                                    Fanancing
                                </a>
                            </p>
                            <p>
                                <a href='#faqs' className='text-reset'>
                                    FAQs
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Business Hours</h6>
                            <p>
                                    Monday - Friday
                            </p>
                            <p>
                                    9:00 am - 5:00 pm
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color:'#FFFFFF' }}>
                © 2023 AC Techi
            </div>
        </MDBFooter>
    );
}