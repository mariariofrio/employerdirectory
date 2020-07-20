import React from "react";
import FilterButton from "./FilterButton";
import UnfilterButton from "./UnfilterButton";

const Employees = () => {
    return (
      <div className= "container">
        <h1>List of Employees!</h1>
      <FilterButton
      buttonText = "Employee"
      />
      
      
      <UnfilterButton
      buttonText = "Manager"
      />
      
      </div>
    );
  }
  
  export default Employees;