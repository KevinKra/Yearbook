import React from "react";
import "./Person.scss";

const Person = props => {
  const { name, photo, quote, superlative } = props.member;
  let card;
  if (quote && superlative) {
    card = (
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
  } else {
    card = (
      <article className="Person">
        <main className="card-header-alt">
          <h2>{name}</h2>
          <img className="fill-image" src={photo} alt={name} />
        </main>
      </article>
    );
  }
  return <article>{card}</article>;
};

export default Person;
