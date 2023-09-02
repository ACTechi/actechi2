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
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form} action='mailto:mariaabelardadiaz@gmail.com'>
                <div className={styles.select}>
                    <label className={styles.label}>When?(choose one)</label>
                    <Controller
                        name='when'
                        control={control}
                        defaultValue={whenOptions[0]}
                        render={({ field }) => (
                            <Select {...field} name='when' options={whenOptions} className="basic-single" classNamePrefix="select" />
                        )}
                    />
                </div>
                <div className={styles.select}>
                    <label>Why?(choose one)</label>
                    <Controller
                        name='why'
                        control={control}
                        defaultValue={whyOptions[0]}
                        render={({ field }) => (
                            <Select {...field} name='why' options={whyOptions} className="basic-single" classNamePrefix="select" />
                        )}
                    />
                </div>
                <div className={styles.select}>
                    <label>What?(choose one)</label>
                    <Controller
                        name='what'
                        control={control}
                        defaultValue={whatOptions[0]}
                        render={({ field }) => (
                            <Select {...field} name='what' options={whatOptions} className="basic-single" classNamePrefix="select" />
                        )}
                    />
                </div>
                <div className={styles.select}>
                    <label>Where?(choose as many as apply)</label>
                    <Controller
                        name='where'
                        control={control}
                        defaultValue={whereOutdoorOptions[0]}
                        render={({ field }) => (
                            <Select {...field} name='where' isMulti options={gruoupOptions} components={animatedComponents} className="basic-multi-select" classNamePrefix="select" />
                        )}
                    />
                </div>
                <div className={styles.select}>
                    <label>Who?(choose as many as apply)</label>
                    <Controller
                        name='who'
                        control={control}
                        defaultValue={whoOptions[0]}
                        render={({ field }) => (
                            <Select {...field} name='who' isMulti options={whoOptions} components={animatedComponents} className="basic-multi-select" classNamePrefix="select" />
                        )}
                    />
                </div>
                <p className={styles.textPF}>If you choose to be contacted, just drop at least one contact method</p>
                <p className={styles.textPS}>You will not be contacted for unsolicited services</p>
                <div className={styles.inputDiv}>
                    <label>Name: <span className={styles.required}>(required)</span></label>
                    <input type='text' name='user' placeholder='Name' {...register('user', { required: 'Name is required.' })}></input>
                    {errors.user && <p className={styles.errorMsg}>{errors.user?.message}</p>}
                </div>
                <div className={styles.inputDiv}>
                    <label>Contact Info: <span className={styles.required}>(required)</span></label>
                    <input type='text' name='contact' placeholder='Contact Info' {...register('contact', { required: 'At least a contact method is required.' })}></input>
                    {errors.contact && <p className={styles.errorMsg}>{errors.contact?.message}</p>}
                </div>
                <div className={styles.inputDiv}>
                    <label>Current System Capacity (Ton):</label>
                    <input type='number' name='current-system' placeholder='Current System Capacity (Ton)' {...register('current-system')}></input>
                </div>
                <div className={styles.inputDiv}>
                    <label>Conditioned Area (sq-ft):</label>
                    <input type='number' name='condition-area' placeholder='Conditioned Area (sq-ft):' {...register('condition-area')}></input>
                </div>
                <p className={styles.textT}>If you do not know your property conditioned, we will do the search for you <span>without going to your location</span></p>
                <div className={styles.inputDiv}>
                    <label>Address:</label>
                    <input type='text' name='address' placeholder='Address' {...register('address')}></input>
                </div>
                <div>
                    <label></label>
                    <button type='submit' className={styles.buttonSubmit}>Submit</button>
                </div>
                <p className={styles.successMsg}>{successMsg}</p>
            </form>
            <div className={styles.backDiv}>
                {successMsg && <Link href='/'><button className={styles.buttonBack}>back to home</button></Link>}
            </div>
        </section>
    )
}