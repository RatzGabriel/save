const getTheTitles = function (array) {
  return array.map((item) => {
    return item.title;
  });
};

console.log(
  getTheTitles([
    {
      title: 'Book',
      author: 'Name',
    },
    {
      title: 'Book2',
      author: 'Name2',
    },
  ])
);

module.exports = getTheTitles;
