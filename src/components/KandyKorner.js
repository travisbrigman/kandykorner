import React from "react";
import "./KandyKorner.css";
import { LocationList } from "./location/LocationList";
import { LocationProvider } from "./location/LocationsProvider";
import { ProductProvider } from "./product/ProductsProvider";
import { ProductList } from "./product/ProductList";

export const KandyKorner = () => (
  <>
    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
    
    <h2>Products</h2>
    <ProductProvider>
      <ProductList />
    </ProductProvider>

  </>
);