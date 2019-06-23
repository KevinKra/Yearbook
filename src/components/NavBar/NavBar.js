import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <h1>Turing Yearbook</h1>
        <div>
          <button onClick={this.props.toggleForm}>Add a new student?</button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
