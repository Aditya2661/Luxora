import React from 'react';
import ecom from '../images/ecom.png';

export default function AboutUs() {
  return (
    <div className="mt-20 sm:mt-40 pb-20 max-w-5xl mx-auto px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold pb-8 text-center">About Us</h1>

      {/* Content */}
      <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
        {/* Text Section */}
        <p className="text-lg sm:text-2xl text-center sm:text-left leading-relaxed">
          At <span className="font-bold">Luxora</span>, we make online shopping effortless and luxurious.
          Search for products across top e-commerce platforms like <span className="font-semibold">Amazon</span>, 
          <span className="font-semibold"> Flipkart</span>, and <span className="font-semibold">Meesho</span>,
          and get curated results in one place. Once you find what you need, we redirect you to your 
          chosen platform to complete the purchase. <br />  
          <span className="font-bold">Shop smarter, save time, and enjoy a seamless experience with us!</span>
        </p>

        {/* Image Section */}
        <img src={ecom} alt="E-commerce illustration" className="w-2/3 sm:w-1/2 lg:w-1/3 h-auto" />
      </div>
    </div>
 
  );
}