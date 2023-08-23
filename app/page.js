'use client'
import FAQSection from './components/FAQSection/FAQSection'
import FinancingSection from './components/FinancingSection/FinancingSection'
import HomeSection from './components/HomeSection/HomeSection'
import AcNavbar from './components/navbar/AcNavbar'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
    <AcNavbar />
    <HomeSection />
    <FinancingSection />
    <FAQSection />
    </main>
      )
}
