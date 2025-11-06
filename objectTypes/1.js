var dune = {
    title: 'Dune',
    originalTitle: 'Dune Part One',
    director: 'Denis Villenenuve',
    releaseYear: 2021,
    boxOffice: {
        budget: 16500000,
        grossUS: 108327830,
        grossWorldWide: 400671789,
    },
};
var cats = {
    title: 'Cats',
    director: 'Tom Hooper',
    releaseYear: 2019,
    boxOffice: {
        budget: 95000000,
        grossUS: 27166770,
        grossWorldWide: 73833348,
    },
};
// const getProfit = (movie: Movie): number => {
//   const { grossWorldWide, budget } = movie.boxOffice;
//   return grossWorldWide - budget;
// };
var getProfit = function (_a) {
    var _b = _a.boxOffice, grossWorldWide = _b.grossWorldWide, budget = _b.budget;
    return grossWorldWide - budget;
};
console.log("$".concat(getProfit(dune), " / for Dune Movie"));
console.log("$".concat(getProfit(cats), " / for Cats Movie"));
