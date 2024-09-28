import Accordion from 'react-bootstrap/Accordion';
import React from 'react'
import TechVisitButton from '../TechVisitButton/TechVisitButton'

import styles from './FAQSection.module.css'

export default function FAQSection() {
    return (
        <section id='faqs'>
            <p className={styles.title}>Frequently Asked Questions</p>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Rather than a virtual appointment, I prefer an in person appointment at home, so that the technician is able to collect all of the necessary information. Can l schedule an at home appointment free of charge?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes!</p>
                        <p>Our estimates are free of charge and our consultant will make sure you receive a high quality service experience.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What information do you need in order to provide me with an estimate? And how long will the virtual appointment take?</Accordion.Header>
                    <Accordion.Body>
                        <p>The information we need is easy to collect and it can be obtained in less than half an hour.</p>
                        <p>Usually, we need:</p>
                        <ul>
                            <li>Pictures of the electrical breakers</li>
                            <li>Pictures of the stickers from both units that show the model and serial.</li>
                            <li>Pictures of the electrical disconnect and the A/C whip</li>
                            <li>Pictures  of the condenser concrete pad</li>
                            <li>Pictures of the air handler unit and it&apos;s base</li>
                            <li>Pictures of the air filter housing</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can you provide me with an estimate prior to pre-qualifying for financing?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes!</p>
                        <p>We will be ready to provide you with an estimate as soon as we finish collecting all of the necessary information.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Besides financing, what other methods of payment do you take?</Accordion.Header>
                    <Accordion.Body>
                        <p>We can process payments via credit or debit card, Zelle transfer, or we can send an electronic payment request via QuickBooks.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can AC Techi provide me with an estimate to update/replace my house&apos;s ductwork?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes!</p>
                        <p>At AC Techi we take pride in professionally performing ductwork replacement/updating at affordable prices.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Do you have special prices for new construction, house flipping, property managers, etc?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes!</p>
                        <p>At AC Techi we have professional estimators that will take care of analyzing your project, review your plans and energy calcs, and provide you with the requested proposal</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Is your air conditioning malfunctioning and you require a technician visit?</Accordion.Header>
                    <Accordion.Body>
                        <p>Get the service your system is needing.</p>
                        <TechVisitButton />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}
