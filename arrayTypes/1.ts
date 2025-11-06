// Part 1
const arrayNum: number[] = [];

// Part 2
const gameBoard: string[][] = [];

// Part 3
type Product = {
  name: string;
  price: number;
};

// Part 4
const getTotal = (object: Product[]): number => {
  const totalPrice: number = object.reduce((accumulator, item) => {
    return (accumulator = accumulator + item.price);
  }, 0);

  return totalPrice;
};

const drink: Product = {
  name: 'The Drink',
  price: 49.99,
};

const biscuit: Product = {
  name: 'The Biscuit',
  price: 59.99,
};

console.log('$', getTotal([drink, biscuit]), ' is the Total Price');
