import React, { Component } from "react";
import Cohort from "../Cohort/Cohort";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import * as data from "../../data/yearbook-data.js";
import * as helpers from "../../utils/index";
import "./App.scss";
import Pagination from "../Pagination/Pagination";

class App extends Component {
  state = {
    displayStaff: false,
    displayForm: false,
    staff: data.staff,
    students: data.students,
    currentPage: {}
  };

  // componentDidMount() {
  //   const pages = helpers.paginate(this.state.students);
  //   this.setState({ pages });
  // }

  // componentDidUpdate() {
  //   this.changePage();
  // }

  // changePage = num => {
  //   const keys = Object.keys(this.state.pages);
  //   console.log("keys", keys);
  // };

  updatePage = currentPage => {
    this.setState({ currentPage });
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
        <Pagination
          updatePage={this.updatePage}
          students={this.state.students}
        />
      </main>
    );
  }
}

export default App;
