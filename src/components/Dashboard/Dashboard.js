import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import House from "./House/House";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    this.getInventory();
  }
  getInventory = () => {
    axios
      .get("/api/houses")
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => console.log(err));
  };
  deleteHouse = id => {
    axios
      .delete(`/api/houses/${id}`)
      .then(res => this.getInventory())
      .catch(err => console.log(err));
  };
  render() {
    const { houses } = this.state;
    const viewHouses = houses.map((house, i) => {
      return (
        <House
          id={house.id}
          name={house.name}
          address={house.address}
          city={house.city}
          state={house.state}
          zip={house.zip}
          img={house.img_url}
          mortgage={house.mortgage}
          rent={house.rent}
          key={i}
          deleteHouse={this.deleteHouse}
        />
      );
    });
    return (
      <div>
        Dashboard Page
        {viewHouses}
        <button>
          <Link to={"/wizard/step1"}>Add Property</Link>
        </button>
      </div>
    );
  }
}

export default Dashboard;
