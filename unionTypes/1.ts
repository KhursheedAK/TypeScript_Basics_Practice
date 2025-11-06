// Part 1
let highScore: number | boolean = 0;
highScore = true;

// Part 2
// (number | string)[] <= this way of interface is mix of numbers and strings that must be an array.
// stuff must have either all number array or string array
let stuff: number[] | string[];
stuff = [2, 3, 4];
stuff = ['hi', 'hello'];

// Part 3 (One Way)
type skillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type caseInsensitive<T extends string> = T | Lowercase<T> | Uppercase<T>;

type flexibleSkillLevel = caseInsensitive<skillLevel>;

let skillLevel: flexibleSkillLevel;

skillLevel = 'expert';
skillLevel = 'Expert';

// Part 3 (Another Way without ignoring case)
type skillLevel_1 = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
let skill: skillLevel_1 = 'Beginner';

// Part 4
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: 'ski' | 'snowboard';
  level: skillLevel;
};

// Part 5
type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

type colors = (RGB | HSL)[];

let color: colors = [
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

const greet = (person: string | string[]): void => {
  if (typeof person === 'string') {
    console.log(`Hello, ${person}`);
  } else {
    person.forEach((p) => {
      console.log(`Hello, ${p}`);
    });
  }
};

greet('Khursheed');
greet(['Khursheed', 'Veronica', 'Olivia']);
