import React, { Component } from "react";
import "./Form.scss";
class Form extends Component {
  state = {
    name: "",
    quote: "",
    superlative: "",
    photo: ""
  };

  captureInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Form sticky">
        <form className="form-content">
          <label htmlFor="name">
            Name:
            <input type="text" name="name" onChange={this.captureInput} />
          </label>
          <label htmlFor="quote">
            Quote:
            <input type="text" name="quote" onChange={this.captureInput} />
          </label>
          <label htmlFor="superlative">
            Superlative:
            <input
              type="text"
              name="superlative"
              onChange={this.captureInput}
            />
          </label>
          <label htmlFor="photo">
            Photo:
            <input type="photo" name="photo" onChange={this.captureInput} />
          </label>
          <button onClick={e => this.props.updateStudents(this.state, e)}>
            Submit
          </button>
          <button onClick={this.props.toggleForm}>Exit</button>
        </form>
      </div>
    );
  }
}

export default Form;
