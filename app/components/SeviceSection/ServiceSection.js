import React from 'react'
import styles from './ServiceSection.module.css'
import GetEstimate from '../GetEstimate/GetEstimate'
import ResidencialCarousel from '../ResidenctialCarousel/ResidencialCarousel'
import CommercialCarousel from '../CommercialCarousel/CommercialCarousel'


export default function ServiceSection() {
    return (
        <section className={styles.servicesSection} id='services'>
            <p className={styles.servicesTitle}>SERVICES</p>
            <p className={styles.Title}>Either residential or light commercial, you can count on us for your changeouts or new construction projects</p>
            <div className={styles.services}>
                <ResidencialCarousel />
                <CommercialCarousel />
            </div>
            <GetEstimate />
        </section>
    )
}