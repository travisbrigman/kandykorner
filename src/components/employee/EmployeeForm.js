import React, { useContext, useRef, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationsProvider";
import "./Employees.css";

export const EmployeeForm = (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);
  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  const location = useRef(null);
  const manager = useRef(null);
  const rate = useRef(null);
  const partTimeFullTime = useRef(null);

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getLocations();
  }, []);

  const constructNewEmployee = () => {
    /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
    const locationId = parseInt(location.current.value);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addEmployee({
        name: name.current.value,
        locationId,
        manager: manager.current.checked,
        FullTime: partTimeFullTime.current.checked,
        hourlyRate: rate.current.value,
      }).then(() => props.history.push("/employees"));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeName">Employee name: </label>
          <input
            type="text"
            id="employeeName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Employee name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeePay">Employee Pay Rate: </label>
          <input
            type="text"
            id="employeePay"
            ref={rate}
            required
            autoFocus
            className="form-control"
            placeholder="hourly wage in USD"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeManagement">Manger? </label>
          <input
            type="checkbox"
            id="employeeManager"
            ref={manager}
            required
            autoFocus
            className="form-control"
            name="isManager"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="employeeManagement">Full Time? </label>
          <input
            type="checkbox"
            id="employeeStatus"
            ref={partTimeFullTime}
            required
            autoFocus
            className="form-control"
            name="employmentStatus"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewEmployee();
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>
    </form>
  );
};
