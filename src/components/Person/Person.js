import React, { Component } from "react";
import "./Person.scss";

class Person extends Component {
  render() {
    const { name, photo, quote, superlative } = this.props.member;
    return (
      <article className="Person">
        <header className="card-header">
          <h2>{name}</h2>
          <img src={photo} alt={name} />
          <p>{quote}</p>
        </header>
        <main className="card-body">
          <p>{superlative}</p>
        </main>
      </article>
    );
  }
}

export default Person;
