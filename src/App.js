import React, { Component } from "react";
import "./App.css";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper.jsx";
import Employee from "./components/Employees/Employee";
import Title from "./components/Title/Title.jsx";
import FilterButton from "./components/buttons/FilterButton";

class App extends Component {

  state = {
    employees: employees,
  };
  onClick = (idtofilter) => {
    console.log  ("filter this");
    const employees = this.state.employees.filter(
      (employee) => {
        let myNeedle = new RegExp (idtofilter, "i")
        let hayStack= employee.location
        return myNeedle.test(hayStack)
      }
      
    );
    console.log("filtered", employees)
    this.setState({ employees });
  } 
  sortMe = () => {
    console.log  ("sort this");
    const employees = new Array (...this.state.employees).sort(
      (a,b)=> a.phone>b.phone?1:-1
      
    );
    console.log("sorted", employees)
    this.setState({ employees });
  } 
  

  render() {
    return (
      <Wrapper>
        <Title >Employer Directory!</Title>
        <FilterButton function={this.onClick} sorter={this.sortMe} />
        {this.state.employees.map((employee,index) => (
        <Employee
        key={index}
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
