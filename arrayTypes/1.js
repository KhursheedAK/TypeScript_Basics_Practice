// Part 1
var arrayNum = [];
// Part 2
var gameBoard = [];
// Part 4
var getTotal = function (object) {
    var totalPrice = object.reduce(function (accumulator, item) {
        return (accumulator = accumulator + item.price);
    }, 0);
    return totalPrice;
};
var drink = {
    name: 'The Drink',
    price: 49.99,
};
var biscuit = {
    name: 'The Biscuit',
    price: 59.99,
};
console.log('$', getTotal([drink, biscuit]), ' is the Total Price');
