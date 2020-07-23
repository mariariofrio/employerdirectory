import React from "react";
import "./employee.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.FirstName} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.FirstName}
          </li>
          <li>
            <strong>Last Name:</strong> {props.LastName}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;