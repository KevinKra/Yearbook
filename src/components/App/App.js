import React, { Component } from "react";
import Cohort from "../Cohort/Cohort";
import NavBar from "../NavBar/NavBar";
import Form from "../Form/Form";
import * as data from "../../data/yearbook-data.js";
import * as helpers from "../../utils/";
import "./App.scss";
import Pagination from "../Pagination/Pagination";

class App extends Component {
  state = {
    displayStaff: true,
    displayForm: false,
    staff: data.staff,
    students: data.students,
    pages: {},
    currentPage: {}
  };

  componentDidMount() {
    const pages = helpers.paginate(this.state.staff);
    this.updatePage(pages["page1"], pages);
  }

  buildPages = () => {
    const { staff, students, displayStaff } = this.state;
    const pages = !displayStaff
      ? helpers.paginate(staff)
      : helpers.paginate(students);
    this.setState({ pages, currentPage: pages[`page1`] });
  };

  updatePage = (currentPage, pages) => {
    this.setState({ currentPage, pages });
  };

  toggleRender = (target, e) => {
    e.preventDefault();
    const toggle = this.state[target];
    this.setState({ [target]: !toggle });
  };

  updateStudents = (student, e) => {
    e.preventDefault();
    const { displayForm, students } = this.state;
    const toggle = displayForm;
    const prevStudents = students;
    const newStudent = { ...student, id: Date.now() };
    const updatedStudents = [newStudent, ...prevStudents];
    const pages = helpers.paginate(updatedStudents);
    this.setState({
      currentPage: pages["page1"],
      pages,
      students: [newStudent, ...prevStudents],
      displayForm: !toggle
    });
  };

  render() {
    const { students, pages, staff, displayStaff, displayForm } = this.state;
    return (
      <main className="App">
        <NavBar
          toggleRender={this.toggleRender}
          displayStaff={displayStaff}
          updatePage={this.updatePage}
          buildPages={this.buildPages}
        />
        <Cohort data={this.state} />
        {displayForm ? (
          <Form
            reRender={this.reRender}
            updateStudents={this.updateStudents}
            toggleRender={this.toggleRender}
          />
        ) : null}
        <Pagination
          updatePage={this.updatePage}
          pages={pages}
          displayStaff={displayStaff}
          students={students}
          staff={staff}
        />
      </main>
    );
  }
}

export default App;
