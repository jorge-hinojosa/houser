import React, { Component } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import routes from "./routes";

import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Link to={"/"} />
          <Link to={"/wizard"} />
        </div>
        {routes}
      </Router>
    );
  }
}

export default App;
