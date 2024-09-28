import React from 'react'
import styles from './TechVisitButton.css'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function TechVisitButton() {
  return (
    <Link href="tel:+14072420890">
            <Button variant="outline-success">Request an A/C Tech Visiting</Button>{' '}
        </Link>
  )
}
