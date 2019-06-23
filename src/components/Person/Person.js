import React, { Component } from "react";
import "./Person.css";

class Person extends Component {
  render() {
    const { name, photo, quote, superlative } = this.props.member;
    return (
      <article className="Person">
        <h3>Person</h3>
        <h3>{name}</h3>
        <img src={photo} alt={name} />
        <p>{quote}</p>
        <p>{superlative}</p>
      </article>
    );
  }
}

export default Person;
