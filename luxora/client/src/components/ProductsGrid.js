import React from 'react';
import flipkarticon from '../images/flipkarticon.jpeg';
import amazonicon from '../images/amazonicon.png';
export default function ProductGrid({ products }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-6">
      {products.map((platform, index) => (
        <React.Fragment key={index}>
          
      
          {platform.items.map((item, itemIndex) => (
            <div key={itemIndex} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src={item.image}
                alt={item.name || "Product Image"}
              />
              <div className="p-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                <p className="mt-1">Price: {item.price || "N/A"}</p>
                 {platform.name === "Amazon" && (<div>
                    <img src={amazonicon} className='h-10 w-15'></img>
                 </div>)}
                 {
                     platform.name === "Flipkart" && (<div className="">
                      <img src={flipkarticon} className='h-10 w-10'></img>
                      </div>
                      )

                 }
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
