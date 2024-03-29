import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {
  UPDATE_NAME,
  UPDATE_ADDRESS,
  UPDATE_CITY,
  UPDATE_STATE,
  UPDATE_ZIP
} from "../../store";

class Wizard1 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      address: reduxState.address,
      city: reduxState.city,
      state: reduxState.state,
      zip: reduxState.zip
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        name: reduxState.name,
        address: reduxState.address,
        city: reduxState.city,
        state: reduxState.state,
        zip: reduxState.zip
      });
    });
  }

  saveChanges = () => {
    store.dispatch({
      type: UPDATE_NAME,
      payload: this.state.name
    });
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: this.state.address
    });
    store.dispatch({
      type: UPDATE_CITY,
      payload: this.state.city
    });
    store.dispatch({
      type: UPDATE_STATE,
      payload: this.state.state
    });
    store.dispatch({
      type: UPDATE_ZIP,
      payload: this.state.zip
    });
  };

  handleName = val => this.setState({ name: val });
  handleAddress = val => this.setState({ address: val });
  handleCity = val => this.setState({ city: val });
  handleState = val => this.setState({ state: val });
  handleZip = val => this.setState({ zip: val });

  render() {
    return (
      <div>
        Wizard Step 1
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
        </div>
        <button onClick={() => this.saveChanges()}>
          <Link to={"/wizard/step2"}>Next Step</Link>
        </button>
      </div>
    );
  }
}

export default Wizard1;
