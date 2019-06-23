import React, { Component } from "react";
import Person from "../Person/Person";
import "./Cohort.css";

class Cohort extends Component {
  displayPeople = () => {
    return this.props.staff.map(member => <Person member={member} />);
  };
  render() {
    return <section className="Cohort">{this.displayPeople()}</section>;
  }
}

export default Cohort;
