import React from "react";
import "./App.css";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper.jsx";
import Employee from "./components/Employees/Employee";
import Title from "./components/Title/Title.jsx";
// import FilterButton from "./components/buttons/FilterButton";

function App() {
  return (
    <Wrapper>
      <Title>Employees List</Title>
      <Employee
        FirstName={employees[0].FirstName}
        LastName={employees[0].LastName}
        image={employees[0].image}
        occupation={employees[0].occupation}
        location={employees[0].location}
      />
      <Employee
        FirstName={employees[1].FirstName}
        LastName={employees[1].LastName}
        image={employees[1].image}
        occupation={employees[1].occupation}
        location={employees[1].location}
      />
      <Employee
        FirstName={employees[2].FirstName}
        LastName={employees[2].LastName}
        image={employees[2].image}
        occupation={employees[2].occupation}
        location={employees[2].location}
      />
    </Wrapper>
  );
};
// function App() {
//   return <FilterButton />;
// }
export default App;
