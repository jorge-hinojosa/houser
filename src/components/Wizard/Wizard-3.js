import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_MORTGAGE, UPDATE_RENT, RESET_STATE } from "../../store";
import axios from "axios";

class Wizard3 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      mortgage: reduxState.mortgage,
      rent: reduxState.rent
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState = {
        mortgage: reduxState.mortgage,
        rent: reduxState.rent
      };
    });
  }

  saveChanges = () => {
    store.dispatch({
      type: UPDATE_MORTGAGE,
      payload: this.state.mortgage
    });
    store.dispatch({
      type: UPDATE_RENT,
      payload: this.state.rent
    });
  };

  handleMortgage = val => this.setState({ mortgage: val });
  handleRent = val => this.setState({ rent: val });

  resetState = () => this.setState({ mortgage: 0, rent: 0 });

  addHouse = () => {
    const reduxState = store.getState();
    const { name, address, city, state, zip, img_url } = reduxState;
    const { mortgage, rent } = this.state;
    axios
      .post("/api/houses", {
        name,
        address,
        city,
        state,
        zip,
        img_url,
        mortgage,
        rent
      })
      .then(res => {
        console.log(res);
        // this.props.getInventory();
        // this.resetState();
      })
      .catch(err => console.log(err));

    store.dispatch({
      type: RESET_STATE
    });
  };

  render() {
    return (
      <div>
        Wizard Step 3
        <div className="Input-form">
          <input
            onChange={e => this.handleMortgage(e.target.value)}
            placeholder="mortgage"
          />
          <input
            onChange={e => this.handleRent(e.target.value)}
            placeholder="rent"
          />
          <button onClick={() => this.saveChanges()}>
            <Link to={"/wizard/step2"}>Previous Step</Link>
          </button>
          <button onClick={() => this.addHouse()}>
            <Link to={"/"}>Complete</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Wizard3;
