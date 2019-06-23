import React, { Component } from "react";
import Cohort from "../Cohort/Cohort";
import * as data from "../../data/yearbook-data.js";
import "./App.css";

class App extends Component {
  state = {
    staff: data.staff
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Cohort staff={this.state.staff} />
      </div>
    );
  }
}

export default App;
