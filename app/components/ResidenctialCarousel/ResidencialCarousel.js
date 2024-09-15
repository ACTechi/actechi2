import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import styles from './ResidencialCarousel.module.css'

export default function ResidencialCarousel() {
    return (
        <section className={styles.carousel}>
        <h2 className={styles.title}>Residential</h2>
        <Carousel pause keyboard touch slide={false}>
            <Carousel.Item>
            <img src='Central-split-system-2024.JPG' alt='Split System'></img>
                <Carousel.Caption className={styles.bg}>
                <h3>Central Split System (Air Conditioner or Heat Pump)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='residential-2nd-2024.png' alt='Split System'></img>
                <Carousel.Caption className={styles.bg}>
                <h3>Central Split System (Air Conditioner or Heat Pump)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='minisplit-residential-2024.JPG' alt='Mini Split System'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Mini Split</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='mobileHome.jpeg' alt='Packaged unit for mobile home'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Packaged unit for mobile home</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='rooftpo-unit-2024.JPG' alt='Rooftop units'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Rooftop units</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='ducts.jpeg' alt='Ducts and all rough ductwork related'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Ducts and all rough ductwork related</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}
