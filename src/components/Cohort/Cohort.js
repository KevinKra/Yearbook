import React from "react";
import * as helpers from "../../utils";
import "./Cohort.scss";

const Cohort = props => {
  return (
    <section className="Cohort">
      {props.data.displayStaff || !props.data.displayStaff
        ? helpers.displayPeople(props.data.currentPage)
        : null}
    </section>
  );
};

export default Cohort;
