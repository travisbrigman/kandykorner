import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationsProvider"
import { ProductProvider } from "./product/ProductsProvider"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./product/ProductList"

export const ApplicationViews = (props) => {
    return (
        <>
            <LocationProvider>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            <ProductProvider>
                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductProvider>
        </>
    )
}