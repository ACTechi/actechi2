import React from 'react'
import styles from './FinancingSection.module.css'
import AcWisestack from '../AcWisestack/AcWisestack'
//import AcSnap from '../AcSnap/AcSnap'

export default function FinancingSection() {
    return (
        <section className={styles.financing} id='financing'>
            <p className={styles.title}>Get PREQUALIFY for Financing</p>
            <p className={styles.green}>FILL A SHORT APPLICATION AND GET A QUICK DECISION</p>
            <p className={styles.noCreditImpact}>Click the link and check your financing options with <span className={styles.bold}>NO CREDIT IMPACT</span> 100% paperless</p>
            <div className={styles.image}>
                <AcWisestack />
               {/* <AcSnap />*/}
            </div>
            <p className={styles.beforeLegend}>You will get a sense on how much you can borrow and what your payments would be, without having to worry about lowering your Credit Score</p>
            <p className={styles.legend}>*All financing is provided by external companies and it is subject to credit approval. Your terms and conditions may vary between different options, according to the contract conditions. Our company is not responsible for the terms accepted in the signed contract between the financing company and the customer.</p>
        </section>
    )
}