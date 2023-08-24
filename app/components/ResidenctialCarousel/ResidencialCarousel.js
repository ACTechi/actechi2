import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import styles from './ResidencialCarousel.module.css'

export default function ResidencialCarousel() {
    return (
        <section className={styles.carousel}>
        <h2 className={styles.title}>Residential</h2>
        <Carousel pause keyboard touch slide={false}>
            <Carousel.Item>
            <img src='centralSplitSystem.jpeg' alt='Split System'></img>
                <Carousel.Caption>
                <h3>Central Split System (Air Conditioner or Heat Pump)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='miniSplit.png' alt='Mini Split System'></img>
                <Carousel.Caption>
                    <h3>Mini Split</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='mobileHome.jpeg' alt='Packaged unit for mobile home'></img>
                <Carousel.Caption>
                    <h3>Packaged unit for mobile home</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='packageUnitRooftop.jpeg' alt='Rooftop units'></img>
                <Carousel.Caption>
                    <h3>Rooftop units</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='ducts.jpeg' alt='Ducts and all rough ductwork related'></img>
                <Carousel.Caption>
                    <h3>Ducts and all rough ductwork related</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}
