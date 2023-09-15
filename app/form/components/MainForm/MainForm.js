'use client'
import React, { useState } from 'react'

import styles from './MainForm.module.css'


export default function MainForm() {
    const [validate, setValidate] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidate(true);
    };
    return (
        <section className={styles.mainFormSection}>
            <div className={styles.title}>
                <div className={styles.titleP}>
                    <p className={styles.firstT}>Customers that answer </p>
                    <p className={styles.secondT}>THE <span className={styles.w}>W</span> QUESTIONAIRE </p>
                    <p className={styles.thirdT}>get things done easy and faster</p>
                </div>
                <img src='/info-02.png' alt='path'></img>
            </div>
            <form action="https://formsubmit.co/tech.actechi@gmail.com" method="POST" novalidate validate={validate} onSubmit={handleSubmit} className={styles.form}>
                <div class="mb-3">
                    <p>When: <span>(choose one)</span></p>
                    <select class="form-select" aria-label="Default select example" name='when'>
                        <option selected>Select on option</option>
                        <option value="It's needed now">It&apos;s needed now</option>
                        <option value="02 week later">02 week later</option>
                        <option value="Shopping around (01 month)">Shopping around (01 month)</option>
                        <option value="Planning in advance">Planning in advance</option>
                    </select>
                </div>
                <div class="mb-3">
                    <p>Why: <span>(choose one)</span></p>
                    <select class="form-select" aria-label="Default select example" name='why'>
                        <option selected>Select on option</option>
                        <option value="Current equipment is done">Current equipment is done</option>
                        <option value="Old equipment, high power bill">Old equipment, high power bill</option>
                        <option value="Lot of failures within 12 months">Lot of failures within 12 months</option>
                        <option value="Looking to update my system">Looking to update my system</option>
                    </select>
                </div>
                <div class="mb-3">
                    <p>What: <span>(choose one)</span></p>
                    <select class="form-select" aria-label="Default select example" name='what'>
                        <option selected>Select on option</option>
                        <option value="Central Split System (outdoor + indoor)">Central Split System (outdoor + indoor)</option>
                        <option value="Mobile Home Packaged Unit">Mobile Home Packaged Unit</option>
                        <option value="Ductless (Mini-Split)">Ductless (Mini-Split)</option>
                        <option value="New Ducts">New Ducts</option>
                    </select>
                </div>
                <div class="mb-3">
                    <p>Where: <span>(choose as many as apply)</span></p>
                    <p>Outdoor:</p>
                    <div class="form-check form-check-inline">
                        <input name='where-outdoor-1' class="form-check-input" type="checkbox" id="ground" value="Ground over pad"></input>
                        <label class="form-check-label" for="ground">Outdoor</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='where-outdoor-2' class="form-check-input" type="checkbox" id="roof" value="Roof Top"></input>
                        <label class="form-check-label" for="roof">Roof Top</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='where-outdoor-3' class="form-check-input" type="checkbox" id="wall" value="Wall on brackets"></input>
                        <label class="form-check-label" for="wall">Wall on brackets</label>
                    </div>
                    <p>Indoor:</p>
                    <div class="form-check form-check-inline">
                        <input name='where-indoor-1' class="form-check-input" type="checkbox" id="firstFloor" value="Closet 1 st story"></input>
                        <label class="form-check-label" for="firstFloor">Closet 1 st story</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='where-indoor-2' class="form-check-input" type="checkbox" id="secondFloor" value="Closet 2 nd story"></input>
                        <label class="form-check-label" for="secondFloor">Closet 2 nd story</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='where-indoor-3' class="form-check-input" type="checkbox" id="garageOver" value="Garage over return box"></input>
                        <label class="form-check-label" for="garageOver">Garage over return box</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='where-indoor-4' class="form-check-input" type="checkbox" id="garageSuspended" value="Garage suspended"></input>
                        <label class="form-check-label" for="garageSuspended">Garage suspended</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='where-indoor-5' class="form-check-input" type="checkbox" id="attic" value="Attic"></input>
                        <label class="form-check-label" for="attic">Attic</label>
                    </div>
                </div>
                <div class="mb-3">
                    <p>Who: <span>(choose as many as apply)</span></p>
                    <div class="form-check form-check-inline">
                        <input name='who1' class="form-check-input" type="checkbox" id="licensed" value="Licensed A/C Pros"></input>
                        <label class="form-check-label" for="licensed">Licensed A/C Pros</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who2' class="form-check-input" type="checkbox" id="insured" value="Insured"></input>
                        <label class="form-check-label" for="insured">Insured</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who3' class="form-check-input" type="checkbox" id="longevity" value="10 + year in business"></input>
                        <label class="form-check-label" for="longevity">10 + year in business</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who4' class="form-check-input" type="checkbox" id="delVal" value="Delivering great value"></input>
                        <label class="form-check-label" for="delVal">Delivering great value</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who5' class="form-check-input" type="checkbox" id="proIntal" value="Professional installers"></input>
                        <label class="form-check-label" for="proInstal">Professional installers</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who5' class="form-check-input" type="checkbox" id="aff" value="Affordable prices"></input>
                        <label class="form-check-label" for="aff">Affordable prices</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who5' class="form-check-input" type="checkbox" id="avFinancing" value="Available financing"></input>
                        <label class="form-check-label" for="avFinancing">Available financing</label>
                    </div>
                </div>
                <p className={styles.textPF}>If you choose to be contacted, just drop at least one contact method</p>
                <p className={styles.textPS}>You will not be contacted for unsolicited services</p>
                <div class="mb-3">
                    <label for="validationCustom01" class="form-label">First and last names <span className={styles.required}>required</span></label>
                    <input name="complete-names" type="text" class="form-control" id="validationCustom01" placeholder='What is your name?' required></input>
                    <div class="invalid-feedback">
                        Please enter your name.
                    </div>
                </div>
                <div class="mb-3">
                    <label for="validationCustom02" class="form-label">Contact Info <span className={styles.required}>required</span></label>
                    <input name="contact-info" type="text" class="form-control" id="validationCustom02" placeholder='How can we contact you?' required></input>
                    <div class="invalid-feedback">
                        Please enter one way we can get in contact with you.
                    </div>
                </div>
                <div class="mb-3">
                    <label for="validationCustom03" class="form-label">Current System Capacity (Ton)</label>
                    <input name="current-system-capacity" type="number" class="form-control" id="validationCustom03" placeholder='Current System Capacity (Ton)'></input>
                </div>
                <div class="mb-3">
                    <label for="validationCustom04" class="form-label">Conditioned Area (sq-ft)</label>
                    <input name="conditioned-area" type="number" class="form-control" id="validationCustom04" placeholder='Conditioned Area (sq-ft)'></input>
                </div>
                <p>If you do not know your property conditioned, we will do the search for you <span className={styles.textT}>without going to your location</span></p>
                <div class="mb-3">
                    <label for="validationCustom05" class="form-label">Address</label>
                    <input name="adress" type="text" class="form-control" id="validationCustom05" placeholder='Address'></input>
                </div>
                <button type="submit" class="btn btn-primary" className={styles.buttonSubmit}>Submit</button>
            </form>
        </section>
    )
}