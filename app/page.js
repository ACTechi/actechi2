'use client'
import AcFooter from './components/AcFooter/AcFooter'
import FAQSection from './components/FAQSection/FAQSection'
import FinancingSection from './components/FinancingSection/FinancingSection'
import HomeSection from './components/HomeSection/HomeSection'
import ServiceSection from './components/SeviceSection/ServiceSection'
import AcNavbar from './components/navbar/AcNavbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.mainPage}>
    <AcNavbar />
    <HomeSection />
    <ServiceSection />
    <FinancingSection />
    <FAQSection />
    <AcFooter />
    </main>
      )
}
