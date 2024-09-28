'use client'
import React from 'react'
import AcFooter from '../components/AcFooter/AcFooter'
import NavBarForm from './components/NavBarForm/NavBarForm'
import MainForm from './components/MainForm/MainForm'

import styles from './page.module.css'


export default function Form() {
    return (
        <main className={styles.formPage}>
            <NavBarForm />
            <MainForm />
            <AcFooter />
        </main>
    )
}