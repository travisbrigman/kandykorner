import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employees.css";
import { LocationContext } from "../location/LocationsProvider";

export const EmployeeList = (props) => {
  // This state changes when `getAnimals()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getEmployees();
    getLocations();
  }, []);

  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </button>
      <article className="employeeList">
        {employees.map((employee) => {
          const store =
            locations.find((loc) => loc.id === employee.locationId) || {};

          return (
            <Employee key={employee.id} employee={employee} location={store} />
          );
        })}
      </article>
    </div>
  );
};
