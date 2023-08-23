/* 'use client'
import React, { useState } from 'react'
import styles from './FAQSection.module.css'

export default function FAQSection() {
    const [active, setActive] = useState(-1);

    const toggleHandler = (id) => () =>
        setActive((active) => (active === id ? -1 : id));

return (
    <section className={styles.faq} id='faq'>
        <p className={styles.title}>Frequently Asked Questions</p>
        <div className={styles.screens}>
            <div className={styles.leftScreen}>
                <p className={styles.question} onClick={toggleHandler(1)}><img src='plus.png' alt='plus sign to see more info' className={styles.more}></img>Does AC TECHI open after-hours or on weekends?</p>
                {active === 1 && <p className={styles.answer}>If you have an emergency with your HVAC equipment and you need any product
                    while our store is closed, use our after-hours sales line (407) 242-0908. We will check
                    our inventory online and someone of our staff will open the store to provide you
                    with the products you need. <span className={styles.legend}>*Charges for this service will be applied.</span></p>}
                <p className={styles.question} onClick={toggleHandler(2)}><img src='plus.png' alt='plus sign to see more info' className={styles.more}></img>Do you offer any financing plan for technicians?</p>
                {active === 2 && <p className={styles.answer}>Yes. We can make an agreement with technicians where they have up to three months
                    to pay for a previously booked equipment. <span className={styles.legend}>*Some restrictions could apply.</span></p>}
                <p className={styles.question} onClick={toggleHandler(3)}><img src='plus.png' alt='plus sign to see more info' className={styles.more}></img>Do you provide delivery service?</p>
                {active === 3 && <p className={styles.answer}>We offer delivery service for contractors depending on the total purchase amount.
                    Ask for the service and we’ll check our availability according to the distance of your
                    delivery. <span className={styles.legend}>*Some charges will apply.</span></p>}
            </div>
            <div className={styles.rightScreen}>
                <p className={styles.question} onClick={toggleHandler(4)}><img src='plus.png' alt='plus sign to see more info' className={styles.more}></img>Do you offer any special treatment for building’s adminitrators?</p>
                {active === 4 && <p className={styles.answer}>If you are a building’s administrator, we can give you consignment inventory
                    and send you the bills periodically, after we have checked consumption and
                    stock.<span className={styles.legend}>*Some restrictions will apply.</span></p>}
                <p className={styles.question} onClick={toggleHandler(5)}><img src='plus.png' alt='plus sign to see more info' className={styles.more}></img>Can you provide help on air filter installation?</p>
                {active === 5 && <p className={styles.answer}>AC Techi provides help on air filters installation to vacation resorts and
                    multifamily buildings periodically in routes of installation and supply.</p>}
            </div>
        </div>
    </section>
)
} */

import Accordion from 'react-bootstrap/Accordion';
import React from 'react'

import styles from './FAQSection.module.css'

export default function FAQSection() {
    return (
        <section>
        <p className={styles.title}>Frequently Asked Questions</p>
        <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Rather than a virtual appoinment, I prefer an in-person appoinment</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </section>
    )
}
