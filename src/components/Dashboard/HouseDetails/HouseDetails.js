import React, { Component } from "react";

class HouseDetails extends Component {
  render() {
    return (
      <div>This is the #{this.props.match.params.id} house details page</div>
    );
  }
}

export default HouseDetails;
