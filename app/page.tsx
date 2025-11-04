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

      <div className={`flex flex-column justify-content-start bg-black-alpha-40 p-6 gap-4 border-round-lg ${styles.marginTopLarge}`}>
        <h1 className='text-6xl font-bold text-white'>Hello there, I&apos;m Toto 👋 </h1>
        <p className='text-white text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, illum. Ducimus repudiandae cum provident laudantium nihil est officiis, aut molestiae iste optio. Itaque veniam inventore in, aperiam repellat voluptate esse.</p>
      </div>

      <Footer/>
    </div>
  )
}

export default page