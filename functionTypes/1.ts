// Part 1
export const twoFer = (name: string = 'khursheed'): string => {
  return `One for ${name}, one for me`;
};

console.log(twoFer());
console.log(twoFer('Veronica'));

// Part 2
export const isLeapYear = (year: number): boolean => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log(isLeapYear(2013));
