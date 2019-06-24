import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return <div>{this.props.length / 8}</div>;
  }
}

export default Pagination;
