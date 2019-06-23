import React, { Component } from "react";
import Cohort from "../Cohort/Cohort";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import * as data from "../../data/yearbook-data.js";
import "./App.css";

class App extends Component {
  state = {
    displayForm: false,
    staff: data.staff,
    students: data.students
  };

  toggleForm = () => {
    const toggle = this.state.displayForm;
    this.setState({ displayForm: !toggle });
  };

  updateStudents = (student, e) => {
    e.preventDefault();
    const prevStudents = this.state.students;
    const newStudent = { ...student, id: Date.now() };
    this.setState({ students: [newStudent, ...prevStudents] });
  };

  render() {
    return (
      <main className="App">
        <NavBar toggleForm={this.toggleForm} />
        <Cohort data={this.state} />
        {this.state.displayForm ? (
          <Form
            updateStudents={this.updateStudents}
            toggleForm={this.toggleForm}
          />
        ) : null}
      </main>
    );
  }
}

export default App;
