import React from 'react'
import styles from './GetEstimate.module.css'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function GetEstimate() {
    return (
        <Link href='/form'>
            <Button variant="primary" className={styles.button}>Get Estimate</Button>{' '}
        </Link>
    )
}