"use client"

import { useEffect, useState } from "react"
import api from "../api/api"
import ProductCard from "../components/ProductCard"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data.data || res.data.products || []))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-900">🛍 Product Store</h1>

      <div
        className="
          grid 
          gap-6 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5
        "
      >
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p className="col-span-full text-gray-500 text-center text-lg">Loading products...</p>
        )}
      </div>
    </div>
  )
}

export default Home
