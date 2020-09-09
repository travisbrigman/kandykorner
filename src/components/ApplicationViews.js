import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationsProvider"
import { ProductProvider } from "./product/ProductsProvider"
import { LocationList } from "./location/LocationList"
import { ProductList } from "./product/ProductList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"

export const ApplicationViews = () => {
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

            <EmployeeProvider>
                <LocationProvider>
                    <Route
                    exact
                    path="/employees"
                    render={(props) => <EmployeeList {...props} />}
                    />

                    <Route
                    exact
                    path="/employees/create"
                    render={(props) => <EmployeeForm {...props} />}
                    />
                </LocationProvider>
            </EmployeeProvider>
        </>
    )
}