import React, { Component } from "react";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    let toggleBoard;
    if (this.props.displayStaff) {
      toggleBoard = (
        <form
          className="toggleBoard"
          onClick={e => this.props.toggleRender("displayStaff", e)}
        >
          <button className="btn-1 disabled" disabled={true}>
            Staff
          </button>
          -<button className="btn-1">Students</button>
          <button className="btn-2 hidden" disabled={true}>
            <i class="fas fa-user-plus" />
          </button>
        </form>
      );
    } else {
      toggleBoard = (
        <form
          className="toggleBoard"
          onSubmit={e => this.props.toggleRender("displayStaff", e)}
        >
          <button className="btn-1">Staff</button>-
          <button className="btn-1 disabled" disabled={true}>
            Students
          </button>
          <button
            className="btn-2"
            onClick={e => this.props.toggleRender("displayForm", e)}
          >
            <i class="fas fa-user-plus" />
          </button>
        </form>
      );
    }
    return (
      <nav className="NavBar">
        <h1>Turing Yearbook</h1>
        <div className="nav-btns">{toggleBoard}</div>
      </nav>
    );
  }
}

export default NavBar;
