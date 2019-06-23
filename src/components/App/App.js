import React, { Component } from "react";
import Cohort from "../Cohort/Cohort";
import * as data from "../../data/yearbook-data.js";
import "./App.css";

class App extends Component {
  state = {
    staff: data.staff,
    students: data.students
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Cohort data={this.state} />
      </div>
    );
  }
}

export default App;
