import React from 'react'
import styles from './HomeSection.module.css'
import GetEstimate from '../GetEstimate/GetEstimate'

export default function HomeSection() {
    return (
        <section className={styles.home} id='home'>
            <div className={styles.texts}>
                <p className={styles.mainText}>Your Air Conditioning and Heating Company in Orlando, FL</p>
                <p className={styles.subText}>Qualified craftmanship & high quality units at affordable prices</p>
                <img src='banner-with-dog.jpg' alt='person enjoying their ac' className={styles.img}></img>
                <p className={styles.question}>Have a project in mind?</p>
                <p className={styles.explanation}>Get an estimate with AC Techi, professionals you can trust for your A/C installation.</p>
                <p className={styles.explanation} id={styles.free}>It's free and easier than ever.</p>
                <GetEstimate />
            </div>
            <img src='banner-with-dog.jpg' alt='person enjoying their ac' className={styles.imgDown}></img>
        </section>
    )
}