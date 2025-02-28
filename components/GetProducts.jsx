'use client';
import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Loading from '../app/(root)/loading';
const fetcher = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

export default function GetProducts() {
  const { data: products, error, isLoading } = useSWR('https://api.escuelajs.co/api/v1/products', fetcher);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <img
            src={product.images[0]} // Image URL from the API
            alt={product.title} // Use product title as alt text
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
          <p className="mt-1">${product.price}</p>
          <p className="text-sm  mt-1">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
