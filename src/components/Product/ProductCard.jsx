import React from 'react'

const ProductCard = ({ product }) => {
  const { title, price, image } = product || {}

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white w-64 flex flex-col">
      <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-medium text-gray-800 text-sm line-clamp-2 mb-2 min-h-10">
          {title}
        </h3>
        <p className="text-lg font-semibold text-gray-900 mb-4">${price}</p>
        <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded">
          Add To cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
