import React, { Component } from "react";
import "./Pagination.scss";

class Pagination extends Component {
  state = {
    page: 1
  };

  handleClick = page => {
    this.props.updatePage(this.props.pages[`page${page}`], this.props.pages);
    this.setState({ page });
  };

  renderButtons = () => {
    const length = Object.keys(this.props.pages).length;
    let buttons = [];
    for (let i = 1; i < length + 1; i++) {
      buttons.push(
        <button
          className="page-buttons"
          key={i}
          onClick={() => this.handleClick(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  render() {
    return <section>{this.renderButtons()}</section>;
  }
}

export default Pagination;
