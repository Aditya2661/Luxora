import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductsGrid from '../components/ProductsGrid'; // Import the ProductGrid component

export default function Display() {
  const location = useLocation();
  const products = location.state?.products || []; // Access products from state

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {products.length > 0 ? (
        <ProductsGrid products={products} />
      ) : (
        <p className="text-gray-500">No products found. Try another search.</p>
      )}
    </div>
  );
}

