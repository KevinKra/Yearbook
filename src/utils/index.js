import React from "react";
import Person from "../components/Person/Person";

export const paginate = target => {
  let counter = 0;
  let pageNumber = 1;
  let page = [];
  const pages = {};
  target.forEach((person, i, a) => {
    counter++;
    if (counter < 9) {
      page.push(person);
    }
    if (counter === 8 || i + 1 === a.length) {
      pages[`page${pageNumber}`] = page;
      pageNumber++;
      page = [];
      counter = 0;
    }
  });
  return pages;
};

export const displayPeople = data => {
  const keys = Object.keys(data);
  return keys.map(key => <Person member={data[key]} key={data[key].id} />);
};
