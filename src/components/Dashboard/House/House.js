import React from "react";
import { Link } from "react-router-dom";

function House(props) {
  return (
    <div>
      <Link to={`/house/${props.id}`}>
        <img src={props.img} alt={props.name} />
      </Link>
      <p>
        Property Name: <span>{props.name}</span>
      </p>
      <p>
        Address: <span>{props.address}</span>
      </p>
      <p>
        City: <span>{props.city}</span>
      </p>
      <p>
        State: <span>{props.state}</span>
      </p>
      <p>
        Zip Code: <span>{props.zip}</span>
      </p>
      <p>
        Monthly Mortgage: <span>{props.mortgage}</span>
      </p>
      <p>
        Desired Rent: <span>{props.rent}</span>
      </p>
      <p>
        Recommended Rent: <span>{+props.mortgage * 1.25}</span>
      </p>

      <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
    </div>
  );
}

export default House;
