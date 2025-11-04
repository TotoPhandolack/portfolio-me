import React from 'react'
import 'primeflex/primeflex.css';
import "./globals.css";
import styles from './page.module.css'
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

const page = () => {
  return (
    <div className={`${styles.marginXLarge}`}>
      <Navbar/>

      {/* Hero Section */}
      <div className={`flex flex-column justify-content-center align-items-start gap-4 ${styles.heroSection}`}>
        <h1 className={styles.heroTitle}>
          Hi there<span style={{color: '#10b981'}}>,</span> I&apos;m <span style={{color: '#10b981'}}>Toto</span> <span className={styles.wave}>👋</span>
        </h1>
        
        <p className={styles.heroDescription}>
          I&apos;m a Laos based developer, GymRat, calisthenic, Handsome and kind.<br/>
          Just autistically <a href="#" style={{color: '#10b981', textDecoration: 'underline'}}>bimbling</a> my way through life.
        </p>
      </div>

      <Footer/>
    </div>
  )
}

export default page