import React from "react"
import "./Locations.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__sqft">{location.squareFootage}</h3>
        <div className="location__access">{location.handicapAccess}</div>
        <address className="location__address">{location.address}</address>
    </section>
)