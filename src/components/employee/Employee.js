import React from "react"
import "./Employees.css"

export const Employee = ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__location__address">{employee.location.address}</div>
        <div className="employee__location__squareFeet">{employee.location.squareFootage}</div>
        <div className="employee__location__handicapAccess">{employee.location.handicapAccess}</div>
    </section>
)