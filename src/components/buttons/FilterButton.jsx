import React from "react";

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
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Please Select An Option!
          </div>
          <div className="container">
          <form className="form">
          <input
            value={this.state.location}
            name="location"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          </form>
            <button className="btn btn-primary" onClick={()=>this.props.function(this.state.location)}>
              Location
            </button>
            <button className="btn btn-warning" onClick={()=>this.props.sorter()}>
              Sort
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Counter;