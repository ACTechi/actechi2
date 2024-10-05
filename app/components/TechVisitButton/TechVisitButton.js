import React from 'react'
import styles from './TechVisitButton.css'
import Button from 'react-bootstrap/Button';
//import Link from 'next/link';

export default function TechVisitButton() {
  return (
    <>
            <Button variant="outline-success" className={styles.button} href="tel:+14074516655">Request an A/C Tech Visiting</Button>{' '}
        </>
  )
}
