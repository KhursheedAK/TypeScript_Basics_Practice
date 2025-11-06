// Part 1
var highScore = 0;
highScore = true;
// Part 2
// (number | string)[] <= this way of interface is mix of numbers and strings that must be an array.
// stuff must have either all number array or string array
var stuff;
stuff = [2, 3, 4];
stuff = ['hi', 'hello'];
var skillLevel;
skillLevel = 'expert';
skillLevel = 'Expert';
var skill = 'Beginner';
var color = [
    { r: 1, g: 2, b: 3, h: 4, s: 5, l: 8 },
    { h: 2, s: 3, l: 6 },
    { r: 5, g: 7, b: 9 },
];
// Part 6
// const greet = (person: string | string[]): string | string[] => {
//   if (typeof person === 'string') {
//     return `Hello, ${person}`;
//   } else {
//     return person.map((p) => {
//       return `Hello, ${p}`;
//     });
//   }
// };
var greet = function (person) {
    if (typeof person === 'string') {
        console.log("Hello, ".concat(person));
    }
    else {
        person.forEach(function (p) {
            console.log("Hello, ".concat(p));
        });
    }
};
greet('Khursheed');
greet(['Khursheed', 'Veronica', 'Olivia']);
