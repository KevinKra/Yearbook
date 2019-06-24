import React, { Component } from "react";
import * as helpers from "../../utils/index";

class Pagination extends Component {
  state = {
    pages: {},
    page: 1
  };

  componentDidMount() {
    const pages = this.props.displayStaff
      ? helpers.paginate(this.props.staff)
      : helpers.paginate(this.props.students);
    console.log(pages);
    this.props.updatePage(pages["page1"]);
    this.setState({ pages });
  }

  handleClick = page => {
    this.props.updatePage(this.state.pages[`page${page}`]);
    this.setState({ page });
  };

  renderButtons = () => {
    const length = Object.keys(this.state.pages).length;
    let buttons = [];
    for (let i = 1; i < length + 1; i++) {
      buttons.push(
        <button key={i} onClick={() => this.handleClick(i)}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

export default Pagination;
