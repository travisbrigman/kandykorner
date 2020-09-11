import React, { useState } from "react";

//    The context is imported and used by individual components that need data

export const CustomerCandyContext = React.createContext();

// This component establishes what data can be used.

export const CustomerCandyProvider = (props) => {
  const [customerCandies, setCustomerCandies] = useState([]);

  const getCustomersCandies = () => {
    return fetch("http://localhost:8088/customersCandies")
      .then((res) => res.json())
      .then(setCustomerCandies);
  };

  const addCustomersCandies = (customerCandy) => {
    return fetch("http://localhost:8088/customersCandies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerCandy),
    }).then(getCustomersCandies);
  };

  return (
    <CustomerCandyContext.Provider
      value={{
        customerCandies,
        getCustomersCandies,
        addCustomersCandies,
      }}
    >
      {props.children}
    </CustomerCandyContext.Provider>
  );
};