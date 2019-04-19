import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import store, { RESET_STATE } from "../../store";
import Wizard1 from "./Wizard-1";
import Wizard2 from "./Wizard-2";
import Wizard3 from "./Wizard-3";
// import axios from "axios";

class Wizard extends Component {
  resetReduxState = () => {
    store.dispatch({
      type: RESET_STATE
    });
  };

  render() {
    return (
      <div>
        <Switch>
          <Route component={Wizard1} path={"/wizard/step1"} />
          <Route component={Wizard2} path={"/wizard/step2"} />
          <Route component={Wizard3} path={"/wizard/step3"} />
        </Switch>
        <button onClick={() => this.resetReduxState()}>
          <Link to={"/"}>Cancel</Link>
        </button>
      </div>
    );
  }
}

export default Wizard;
