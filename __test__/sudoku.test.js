import { sudokuChecker } from "./../src/sudoku.js";

const numbers = {
  "1": 1,
  "2": 1,
  "3": 0,
  "4": 2,
  "5": 1,
  "6": 1,
  "7": 1,
  "8": 1,
  "9": 1
};

describe("sudokuChecker", () => {
  
  test("Should take in an numObject with more than one or less than one number each and return false", () => 
  {
    expect(sudokuChecker(numbers)).toEqual(false);
  });
});


