import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';
import styles from './CommercialCarousel.module.css'

export default function CommercialCarousel() {
    return (
        <section className={styles.carousel}>
        <h2 className={styles.title}>Commercial</h2>
        <Carousel pause keyboard touch slide={false}>
            <Carousel.Item>
            <Image src='/lightCommercial.jpeg' alt='RTU' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                <h3>RTU</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/commercial-small-2024.jpg' alt='Small Units for adding extra capacity' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Small Units for adding extra capacity</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/commercial-appartment-complex-2024.png' alt='Commercial apartment complex' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Changeout and new build up for:</h3>
                    <p>Multifamily apartment complex</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/buid-up-wearhouse-2024.jpg' alt='commercial buildup' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Changeout and new build up for:</h3>
                    <p>Warehouses & storage</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/commercial-changeout-2024.jpg' alt='commercial changeout' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Changeout and new build up for:</h3>
                    <p>Warehouses & storage</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}
