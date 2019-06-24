import React, { Component } from "react";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    let toggleBoard;
    if (this.props.displayStaff) {
      toggleBoard = (
        <form
          className="toggleBoard"
          onSubmit={e => this.props.toggleRender("displayStaff", e)}
        >
          <button className="btn-1 disabled" disabled={true}>
            Staff
          </button>
          -
          <button className="btn-1" onClick={this.props.buildPages}>
            Students
          </button>
          <button className="btn-2 hidden" disabled={true}>
            <i className="fas fa-user-plus" />
          </button>
        </form>
      );
    } else {
      toggleBoard = (
        <form
          className="toggleBoard"
          onSubmit={e => this.props.toggleRender("displayStaff", e)}
        >
          <button className="btn-1" onClick={this.props.buildPages}>
            Staff
          </button>
          -
          <button className="btn-1 disabled" disabled={true}>
            Students
          </button>
          <button
            className="btn-2"
            onClick={e => this.props.toggleRender("displayForm", e)}
          >
            <i className="fas fa-user-plus" />
          </button>
        </form>
      );
    }
    return (
      <nav className="NavBar">
        <div className="title">
          <i className="fas fa-brain" />
          <h1>Turing Yearbook</h1>
        </div>
        <div className="nav-btns">{toggleBoard}</div>
      </nav>
    );
  }
}

export default NavBar;
