import React, { Component } from "react";
import Person from "../Person/Person";
import "./Cohort.scss";

class Cohort extends Component {
  displayPeople = data => {
    const keys = Object.keys(data);
    return keys.map(key => <Person member={data[key]} key={data[key].id} />);
  };

  render() {
    return (
      <section className="Cohort">
        {this.props.data.displayStaff &&
          this.displayPeople(this.props.data.currentPage)}
        {!this.props.data.displayStaff &&
          this.displayPeople(this.props.data.currentPage)}
      </section>
    );
  }
}

export default Cohort;
