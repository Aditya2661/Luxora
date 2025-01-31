import React from 'react';
import flipkarticon from '../images/flipkarticon.jpeg';
import amazonicon from '../images/amazonicon.png';
import toast from 'react-hot-toast';
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
                <button onClick={() => {
                  let itemProp = {
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    platform: platform.name,
                    id : item.productId
                  }

                  let cart = localStorage.getItem("cart");
                  if(cart){
                    cart = JSON.parse(cart)
                    let itekmPresent = false;
                    cart.forEach((cartItem) => {
                      if(cartItem.name === itemProp.name){
                        itekmPresent = true;
                      }
                    })

                    if(!itekmPresent){
                      cart.push(itemProp)
                    }else{
                      cart = cart.filter((cartItem) => cartItem.name !== itemProp.name)
                    }

                    localStorage.setItem("cart", JSON.stringify(cart))
                  }else{
                    cart = []
                    cart.push(itemProp)
                    localStorage.setItem("cart", JSON.stringify(cart))
                  }

                  toast.success("Item added to cart")
                }} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Add to Cart
                </button>
                
                <a href = {`https://amazon.in/dp/${item.productId}`} target='_blank'><button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-10" >Buy Now</button></a>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
