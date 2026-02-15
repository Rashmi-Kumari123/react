import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Redux/product/action'

const ProductList = () => {
    const store = useSelector((store) => store);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
        <>
            {store.product.loading ? (
                <div className="h-screen flex flex-col justify-center">
                    <h1 className="font-bold text-5xl text-center">loading...</h1>
                </div>
            ) : (
                <div className="flex flex-wrap gap-5">
                    {store.product.products.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
                </div>
            )}
        </>
    )
}

export default ProductList