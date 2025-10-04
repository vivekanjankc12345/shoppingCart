"use client"
import { useCart } from "../context/CartContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-xl
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
      p-4
      flex
      flex-col
      w-full
      h-full
    "
    >
      <div className="w-full overflow-hidden rounded-lg">
        <img src={product.imageUrl || "/placeholder.svg"} alt={product.name} className="w-full h-56 object-cover" />
      </div>

      <div className="flex flex-col flex-grow mt-4">
        <h3 className="font-semibold text-gray-900 text-lg line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
        <p className="text-gray-700 mt-2 font-medium text-xl">₹{product.price.toLocaleString()}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="
          bg-red-500 
          text-white 
          font-semibold
          px-6 
          py-2.5
          rounded-full 
          mt-4 
          w-full
          hover:bg-red-600 
          focus:ring-2 
          focus:ring-red-300 
          transition
        "
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
