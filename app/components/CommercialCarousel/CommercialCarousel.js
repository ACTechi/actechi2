import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import styles from './CommercialCarousel.module.css'

export default function CommercialCarousel() {
    return (
        <section className={styles.carousel}>
        <h2 className={styles.title}>Commercial</h2>
        <Carousel pause keyboard touch slide={false}>
            <Carousel.Item>
            <img src='lightCommercial.jpeg' alt='RTU'></img>
                <Carousel.Caption>
                <h3>RTU</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='Placeholder.png' alt='placeholder'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Small Units for adding extra capacity</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='Placeholder.png' alt='placeholder'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Changeout and new build up for:</h3>
                    <p>Multifamily apartment complex</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img src='Placeholder.png' alt='placeholder'></img>
                <Carousel.Caption className={styles.bg}>
                    <h3>Changeout and new build up for:</h3>
                    <p>Warehouses & storage</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}
