'use client'
import React from 'react'
import AcFooter from '../components/AcFooter/AcFooter'
import NavBarForm from './components/NavBarForm/NavBarForm'
import MainForm from './components/MainForm/MainForm'



export default function Form() {
    return (
        <div>
            <NavBarForm />
            <MainForm />
            <AcFooter />
        </div>
    )
}