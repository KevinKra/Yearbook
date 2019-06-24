export const paginate = target => {
  let counter = 0;
  let pageNumber = 1;
  let page = [];
  const pages = {};
  target.map((person, i, a) => {
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
  // console.log(page);
  // console.log(pages);
};
