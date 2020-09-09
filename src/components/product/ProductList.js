import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductsProvider"
import { Product } from "./Product"
import "./Products.css"


export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className="products">
        {
            products.map(product => <Product key={product.id} product={product} />)
        }
        </div>
    )
}