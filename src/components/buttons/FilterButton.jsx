import React from "react";
import "./filterbutton.css";

class Counter extends React.Component {
    state = {
      location: ""
    };
  
    handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;

      // Updating the input's state
      this.setState({
        [name]: value
      });
    };
  
    render() {
      return (
        <div className="container-sm ">
          <div className="card-header bg-dark alert text-white">
            Type Employee's Location!
          </div>
          <div className="container">
          <form className="form">
          <input
            value={this.state.location}
            name="location"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Location"
          />
          </form>
            <button className="btn btn-info alert"  onClick={()=>this.props.function(this.state.location)}>
              Location
            </button>
            <button className="btn btn-secondary alert" onClick={()=>this.props.sorter()}>
              Sort
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Counter;