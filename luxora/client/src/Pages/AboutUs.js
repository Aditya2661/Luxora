import React from 'react'
import ecom from "../images/ecom.png"
export default function AboutUs() {
  return (
    <div>
        <div className='mt-40 pb-30'>
        <h1 className='text-8xl font-bold pb-8' >About Us</h1>
        <div className='flex justify-center items-center flex-row max-w-screen '>
        <p className='text-2xl'>
        At Luxora , we make online shopping effortless and luxurious.
        Search for products across top e-commerce platforms like Amazon, Flipkart, and Meesho, 
        and get curated results in one place. Once you find what you need, we redirect you to your 
        chosen platform to complete the purchase.
        Shop smarter, save time, and enjoy a seamless experience with us!
        </p>
        <img src={ecom} alt="ecom" className='w-1/3 h-1/2'/>
        </div>
        </div>
    </div>
  )
}
