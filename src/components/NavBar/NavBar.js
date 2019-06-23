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
          <button className="disabled" disabled={true}>
            Staff
          </button>
          <button>Students</button>
        </form>
      );
    } else {
      toggleBoard = (
        <form
          className="toggleBoard"
          onSubmit={e => this.props.toggleRender("displayStaff", e)}
        >
          <button>Staff</button>
          <button className="disabled" disabled={true}>
            Students
          </button>
        </form>
      );
    }
    return (
      <nav className="NavBar">
        <h1>Turing Yearbook</h1>
        <div className="nav-btns">
          {!this.props.displayStaff && (
            <button onClick={e => this.props.toggleRender("displayForm", e)}>
              Add a new student?
            </button>
          )}
          {toggleBoard}
        </div>
      </nav>
    );
  }
}

{
  /* <button onClick={() => this.props.toggleRender("displayStaff")}>
{this.props.displayStaff ? <p>Students</p> : <p>Staff</p>}
</button> */
}

export default NavBar;
