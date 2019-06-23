import React, { Component } from "react";
import Cohort from "../Cohort/Cohort";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import * as data from "../../data/yearbook-data.js";
import "./App.scss";

class App extends Component {
  state = {
    displayStaff: true,
    displayForm: false,
    staff: data.staff,
    students: data.students
  };

  toggleRender = (target, e) => {
    e.preventDefault();
    const toggle = this.state[target];
    this.setState({ [target]: !toggle });
  };

  updateStudents = (student, e) => {
    e.preventDefault();
    const toggle = this.state.displayForm;
    const prevStudents = this.state.students;
    const newStudent = { ...student, id: Date.now() };
    this.setState({
      students: [newStudent, ...prevStudents],
      displayForm: !toggle
    });
  };

  render() {
    return (
      <main className="App">
        <NavBar
          toggleRender={this.toggleRender}
          displayStaff={this.state.displayStaff}
        />
        <Cohort data={this.state} />
        {this.state.displayForm ? (
          <Form
            updateStudents={this.updateStudents}
            toggleRender={this.toggleRender}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
