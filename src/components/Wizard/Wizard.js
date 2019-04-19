import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Wizard extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 10101
    };
  }
  handleName = val => this.setState({ name: val });
  handleAddress = val => this.setState({ address: val });
  handleCity = val => this.setState({ city: val });
  handleState = val => this.setState({ state: val });
  handleZip = val => this.setState({ zip: val });
  resetState = () =>
    this.setState({ name: "", address: "", city: "", state: "", zip: 0 });

  addHouse = () => {
    const { name, address, city, state, zip } = this.state;
    axios
      .post("/api/houses", { name, address, city, state, zip })
      .then(res => {
        // this.props.getInventory();
        this.resetState();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        Wizard Page
        <div className="Input-form">
          <input
            onChange={e => this.handleName(e.target.value)}
            placeholder="name"
          />
          <input
            onChange={e => this.handleAddress(e.target.value)}
            placeholder="address"
          />
          <input
            onChange={e => this.handleCity(e.target.value)}
            placeholder="city"
          />
          <input
            onChange={e => this.handleState(e.target.value)}
            placeholder="state"
          />
          <input
            onChange={e => this.handleZip(e.target.value)}
            placeholder="zip code"
          />
          <button onClick={() => this.addHouse()}>
            {/* Complete */}
            <Link to={"/"}>Complete</Link>
          </button>
        </div>
        <button>
          <Link to={"/"}>Cancel</Link>
        </button>
      </div>
    );
  }
}

export default Wizard;
