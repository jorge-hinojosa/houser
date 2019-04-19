import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import HouseDetails from "./components/Dashboard/HouseDetails/HouseDetails";
// import Wizard1 from "./components/Wizard/Wizard-1";
// import Wizard2 from "./components/Wizard/Wizard-2";
// import Wizard3 from "./components/Wizard/Wizard-3";

export default (
  <Switch>
    <Route component={Dashboard} exact path={"/"} />
    <Route component={Wizard} path={"/wizard"} />
    <Route component={HouseDetails} path={"/house/:id"} />
  </Switch>
);
