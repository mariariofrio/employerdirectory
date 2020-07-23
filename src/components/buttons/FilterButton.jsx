import React from "react";

class Counter extends React.Component {
    state = {
      count: 0
    };
  
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    handleDecrement = () => {
      this.setState({ count: this.state.count - 1 });
    };
  
    render() {
      return (
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            Please Select An Option!
          </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.count}</p>
            <button className="btn btn-primary" onClick={this.handleIncrement}>
              Manager
            </button>
            <button className="btn btn-warning" onClick={this.handleDecrement}>
              Employee
            </button>
          </div>
        </div>
      );
    }
  }
  
  export default Counter;