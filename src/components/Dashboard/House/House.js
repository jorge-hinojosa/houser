import React from "react";

function House(props) {
  return (
    <div>
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

      <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
    </div>
  );
}

export default House;
