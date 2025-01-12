import React from 'react'
import Logo from "../images/Logo.png"
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Footer from './Footer'
export default function Landing() {
  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <div className=' flex justify-center items-center flex-col h-1/4 mt-20 w-3/4'>
        <img src={Logo} ></img>
        <h1 className='font-merriweather text-3xl mt-4'>Find What You Love, Love What You Find</h1>
        </div>
      </div>
      <div className='flex justify-center items-center flex-col mt-20 '>
        <AboutUs/>
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  )
}
