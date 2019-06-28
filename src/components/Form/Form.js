import React, { Component } from "react";
import "./Form.scss";
class Form extends Component {
  state = {
    name: "",
    quote: "",
    superlative: "",
    photo: "https://placekitten.com/200/300"
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, quote, superlative } = this.state;
    const { updateStudents, toggleRender } = this.props;
    return (
      <div className="Form fixed">
        <form
          className="form-content"
          onSubmit={e => updateStudents(this.state, e)}
        >
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              required
              onChange={e => this.captureInput(e)}
            />
          </label>
          <label htmlFor="quote">
            Quote:
            <input
              type="text"
              name="quote"
              autoComplete="off"
              value={quote}
              required
              onChange={e => this.captureInput(e)}
            />
          </label>
          <label htmlFor="superlative">
            Superlative:
            <input
              type="text"
              name="superlative"
              autoComplete="off"
              value={superlative}
              required
              onChange={e => this.captureInput(e)}
            />
          </label>
          <button>Submit</button>
          <button onClick={e => toggleRender("displayForm", e)}>Exit</button>
        </form>
      </div>
    );
  }
}

export default Form;
