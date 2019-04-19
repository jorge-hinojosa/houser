import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_IMG_URL } from "../../store";

class Wizard2 extends Component {
  constructor() {
    super();
    const reduxState = store.getState();
    this.state = {
      img_url: reduxState.img_url
    };
  }
  componentDidMount() {
    store.subscribe(() => {
      const reduxState = store.getState();
      this.setState({
        img_url: reduxState.img_url
      });
    });
  }
  saveChanges = () => {
    store.dispatch({
      type: UPDATE_IMG_URL,
      payload: this.state.img_url
    });
  };

  handleImg = val => this.setState({ img_url: val });

  render() {
    return (
      <div>
        Wizard Step 2
        <div className="Input-form">
          <input
            onChange={e => this.handleImg(e.target.value)}
            placeholder="Image URL"
          />
        </div>
        {/* <button>
          <Link to={"/"}>Cancel</Link>
        </button> */}
        <button onClick={() => this.saveChanges()}>
          <Link to={"/wizard/step1"}>Previous Step</Link>
        </button>
        <button onClick={() => this.saveChanges()}>
          <Link to={"/wizard/step3"}>Next Step</Link>
        </button>
      </div>
    );
  }
}

export default Wizard2;
