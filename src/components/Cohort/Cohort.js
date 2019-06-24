import React, { Component } from "react";
import Person from "../Person/Person";
import "./Cohort.scss";

class Cohort extends Component {
  // displayPeople = data => {
  //   return data.map(member => <Person member={member} key={member.id} />);
  // };

  displayPeople = data => {
    const keys = Object.keys(data);
    console.log("keys", keys);
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
