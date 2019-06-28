import React from "react";
import * as helpers from "../../utils";
import "./Cohort.scss";

const Cohort = props => {
  return (
    <section className="Cohort">
      {props.data.displayStaff && helpers.displayPeople(props.data.currentPage)}
      {!props.data.displayStaff &&
        helpers.displayPeople(props.data.currentPage)}
    </section>
  );
};

export default Cohort;
