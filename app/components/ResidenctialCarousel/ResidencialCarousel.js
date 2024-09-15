import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import Image from 'next/image';
import styles from './ResidencialCarousel.module.css'

export default function ResidencialCarousel() {
    return (
        <section className={styles.carousel}>
        <h2 className={styles.title}>Residential</h2>
        <Carousel pause keyboard touch slide={false}>
            <Carousel.Item>
            <Image src='/Central-split-system-2024.jpeg' alt='Split System' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                <h3>Central Split System (Air Conditioner or Heat Pump)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/residential-2nd-2024.png' alt='Split System' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                <h3>Central Split System (Air Conditioner or Heat Pump)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/minisplit-residential-2024.jpeg' alt='Mini Split System' width={400} height={400}/>
                <Carousel.Caption className={styles.bg}>
                    <h3>Mini Split</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/mobileHome.jpeg' alt='Packaged unit for mobile home' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Packaged unit for mobile home</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/rooftpo-unit-2024.jpeg' alt='Rooftop units' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Rooftop units</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src='/ducts.jpeg' alt='Ducts and all rough ductwork related' width={400} height={400} />
                <Carousel.Caption className={styles.bg}>
                    <h3>Ducts and all rough ductwork related</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </section>
    )
}
