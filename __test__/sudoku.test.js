import { sudokuChecker, sudokuRowAndColChecker } from "./../src/sudoku.js";

const row = { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1, "9": 1 };
const column = { "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1, "9": 1 };


describe("sudokuChecker", () => {
  
  test("Should take in an number Object with one of each number between 1 - 9 and return true", () => 
  {
    expect(sudokuChecker(row)).toEqual(true);
  });

  test("Should take in two number Objects with one of each number between 1 - 9 and return true", () => 
  {
    expect(sudokuRowAndColChecker(row, column)).toEqual(true);
  });
});


