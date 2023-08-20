const getTheTitles = function(array) {
    let titles = [];
    array.forEach((book) => {
        titles.push(book.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
