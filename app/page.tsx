import React from 'react'
import 'primeflex/primeflex.css';
import "./globals.css";
import styles from './page.module.css'



const page = () => {
  return (
    <div className={`${styles.marginXLarge}`}>
      <h1 className='flex justify-content-center text-5xl text-white'>Setup projects</h1>
    </div>
  )
}

export default page