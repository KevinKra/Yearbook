import React, { Component } from "react";
import "./Form.scss";
class Form extends Component {
  state = {
    name: "",
    quote: "",
    superlative: "",
    photo: ""
  };

  captureInput = (e, file = false) => {
    const { name, value } = e.target;
    // file ? e.target.value.replace("C:\fakepath\", "") : null;
    this.setState({ [name]: value });
  };

  captureImage = e => {};

  render() {
    return (
      <div className="Form sticky">
        <form
          className="form-content"
          onSubmit={e => this.props.updateStudents(this.state, e)}
        >
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              autoComplete="off"
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
              required
              onChange={e => this.captureInput(e)}
            />
          </label>
          <label htmlFor="photo">
            Photo:
            <input
              type="file"
              name="photo"
              accept="image/*"
              autoComplete="off"
              required
              onChange={e => this.captureInput(e)}
            />
          </label>
          <button>Submit</button>
          <button onClick={this.props.toggleForm}>Exit</button>
        </form>
      </div>
    );
  }
}

export default Form;
