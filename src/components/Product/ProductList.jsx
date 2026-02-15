import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const api = "https://fakestoreapi.com/products"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    
    const fetchProducts = async () => {
        try {
            const response = await axios.get(api);
            setProducts(response.data)  
        } catch (error) {
            console.log("fetch error", error)
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])
    
    console.log("products outside", products)

    return (
        <div className='flex flex-wrap gap-5'>
            {products.map((item, index) => (
                <ProductCard key={index} product={item} />
            ))}
        </div>
    )
}

export default ProductList