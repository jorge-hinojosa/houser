import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
// import Wizard1 from "./components/Wizard/Wizard-1";
// import Wizard2 from "./components/Wizard/Wizard-2";
// import Wizard3 from "./components/Wizard/Wizard-3";

export default (
  <Switch>
    <Route component={Dashboard} exact path={"/"} />
    <Route component={Wizard} path={"/wizard"} />
    {/* <Route component={Wizard1} exact path={"/wizard-1"} />
    <Route component={Wizard2} exact path={"/wizard-2"} />
    <Route component={Wizard3} exact path={"/wizard-3"} /> */}
  </Switch>
);
