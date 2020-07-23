import React, { Component } from "react";
import "./App.css";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper.jsx";
import Employee from "./components/Employees/Employee";
import Title from "./components/Title/Title.jsx";
// import FilterButton from "./components/buttons/FilterButton";
class App extends Component {

  state = {
    employees: employees,
  };
  onClick = (idtofilter) => {
    console.log  ("filter this");
    const employees = this.state.employees.filter(
      (employee) => employee.id !== idtofilter
      
    );
    this.setState({ employees });
  } 

  render() {
    return (
      <Wrapper>
        <Title>Employees Directory!</Title>
        {this.state.employees.map((employee) => (
        <Employee
          FirstName={employee.FirstName}
          LastName={employee.lastName}
          image={employee.image}
          occupation={employee.occupation}
          location={employee.location}
          email={employee.email}
          phone={employee.phone}
          // id={employee.id}
          // onClick={(employees) => this.deleteRow(id, employees)}
          // onClick={this.deleteRow.bind(this, id)}
        />
        ))}
      </Wrapper>
    );
    };
}
  // function App() {
  //   return <FilterButton />;
  // }
  export default App;
