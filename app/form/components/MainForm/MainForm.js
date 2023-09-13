'use client'
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import styles from './MainForm.module.css'
import { whatOptions, whenOptions, whereOutdoorOptions, whoOptions, whyOptions } from '../../../../data/options';
import { gruoupOptions } from '../../../../data/options';
import Link from 'next/link';
/* import addEstimateData from '@/firebase/firestore/addData'; */
/* import { v4 as uuidv4 } from 'uuid' */

export default function MainForm() {
    const [successMsg, setSuccessMsg] = useState('')
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    /* const estimateId = uuidv4(); */

    const animatedComponents = makeAnimated();

    /* const onSubmit = async (data) => {
        data.userId = estimateId;
        data.status = 'pending';
        data.date = Date.now();
        console.log(data);
        const { result, error } = await addEstimateData(data);
        if (error) {
            console.log(error)
        }
        console.log(result)
        reset()
        setSuccessMsg('Your information was submitted sucessfully')
    };
 */
    const onSubmit = (data) => {
        console.log(data);
        reset();
        setSuccessMsg('Your information was submitted sucessfully')
    }
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
            <form action="https://formsubmit.co/tech.actechi@gmail.com" method="POST">
                <div class="mb-3">
                    <p>When: <span>(choose one)</span></p>
                    <select class="form-select" aria-label="Default select example" name='when'>
                        <option selected>Select on option</option>
                        <option value="It's needed now">It's needed now</option>
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
                        <input name='who1' class="form-check-input" type="checkbox" id="indoor" value="Indoor"></input>
                        <label class="form-check-label" for="indoor">Indoor</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who2' class="form-check-input" type="checkbox" id="outdoor" value="Outdoor"></input>
                        <label class="form-check-label" for="outdoor">Outdoor</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who3' class="form-check-input" type="checkbox" id="ground" value="Ground over pad"></input>
                        <label class="form-check-label" for="ground">Outdoor</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who4' class="form-check-input" type="checkbox" id="roof" value="Roof Top"></input>
                        <label class="form-check-label" for="roof">Roof Top</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name='who5' class="form-check-input" type="checkbox" id="wall" value="Wall on brackets"></input>
                        <label class="form-check-label" for="wall">Wall on brackets</label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email'></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" name='checked'></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div className={styles.backDiv}>
                {successMsg && <Link href='/'><button className={styles.buttonBack}>back to home</button></Link>}
            </div>
        </section>
    )
}