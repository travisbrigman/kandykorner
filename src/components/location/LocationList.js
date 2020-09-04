import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { Location } from "./Location"
import "./Locations.css"


export const LocationList = () => {
    // This state changes when `getLocations()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log("LocationList: Initial render before data")
        getLocations()
    },[getLocations])

    return (
        <div className="locations">
        {
            locations.map(loc => <Location key={loc.id} location={loc} />)
        }
        </div>
    )
}