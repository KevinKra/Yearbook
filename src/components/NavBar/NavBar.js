import React from "react";
import "./NavBar.scss";

const NavBar = props => {
  let toggleBoard;
  if (props.displayStaff) {
    toggleBoard = (
      <form
        className="toggleBoard"
        onSubmit={e => props.toggleRender("displayStaff", e)}
      >
        <button className="btn-1 disabled" disabled={true}>
          Staff
        </button>
        -
        <button className="btn-1" onClick={props.buildPages}>
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
        onSubmit={e => props.toggleRender("displayStaff", e)}
      >
        <button className="btn-1" onClick={props.buildPages}>
          Staff
        </button>
        -
        <button className="btn-1 disabled" disabled={true}>
          Students
        </button>
        <button
          className="btn-2"
          onClick={e => props.toggleRender("displayForm", e)}
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
};

export default NavBar;
