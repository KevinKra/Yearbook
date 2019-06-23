import React, { Component } from "react";
import Person from "../Person/Person";
import "./Cohort.scss";

class Cohort extends Component {
  displayPeople = data => {
    return data.map(member => <Person member={member} key={member.id} />);
  };

  render() {
    return (
      <section className="Cohort">
        {this.props.data.displayStaff &&
          this.displayPeople(this.props.data.staff)}
        {!this.props.data.displayStaff &&
          this.displayPeople(this.props.data.students)}
      </section>
    );
  }
}

export default Cohort;
