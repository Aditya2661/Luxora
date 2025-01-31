import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index); 
    setCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from the cart");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-4">Cart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                className="w-full h-56 object-cover object-center"
                src={item.image}
                alt={item.name || "Product Image"}
              />
              <div className="p-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
                <p className="mt-1">Price: {item.price || "N/A"}</p>
                <p className="mt-1">Platform: {item.platform || "N/A"}</p>
              </div>
              <div className='flex max-w-full justify-end'>
                <a href={`https://amazon.in/dp/${item.id}`} target='_blank' rel="noopener noreferrer">
                  <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ml-10">
                    Buy Now
                  </button>
                </a>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                  onClick={() => removeFromCart(index)}
                >
                  Clear
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
