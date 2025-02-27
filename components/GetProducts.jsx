import React from 'react'

async function fetchproducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        cache : "no-store"
    })    

    if(!res.ok){
        throw new Error("Failed to fetch emploee details")
    }

    return res.json()
}




export default async function GetProducts() {
    const products = await fetchproducts()
    console.log(products)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {products.map((product) => (
      <div key={product.id} className="border p-4 rounded-lg shadow-md">
        <img
          src={product.images[0]} // First image from the array
          alt={product.title}
          className="w-full h-60 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600 mt-1">${product.price}</p>
        <p className="text-sm text-white-500 mt-1">{product.description}</p>
      </div>
    ))}
  </div>
  )
}
