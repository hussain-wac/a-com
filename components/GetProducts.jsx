import React from 'react'

async function fetchData() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products", {
        cache : "no-store"
    })    

    if(!res.ok){
        throw new Error("Failed to fetch emploee details")
    }

    return res.json()
}




export default async function GetProducts() {
    const data = await fetchData()
    console.log(data)
  return (
    <div>
      
    </div>
  )
}
