type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldWide: number;
  };
};

const dune: Movie = {
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

const cats: Movie = {
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

const getProfit = ({
  boxOffice: { grossWorldWide, budget },
}: Movie): number => {
  return grossWorldWide - budget;
};

console.log(`$${getProfit(dune)} / for Dune Movie`);
console.log(`$${getProfit(cats)} / for Cats Movie`);
