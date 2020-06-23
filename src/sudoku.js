export function sudokuChecker(numObject) {
  const values = Object.values(numObject);
  for (let i = 0; i < values.length; i++){
    if (values[i] !== 1)
      return false;
  }
  return true;
}



function SudokuRowAndColumn() {
  this.rowAndColumn = [];
}

SudokuRowAndColumn.prototype.testRow = function (row) {
  const rowValues = Object.values(row);
  for (let i = 0; i < rowValues.length; i++) {
    if (rowValues[i] !== 1) {
      return false;
    }
    this.rowAndColumn.push(rowValues[i]);
  }
  return true;
}

SudokuRowAndColumn.prototype.testColumn = function (col) {
  const colValues = Object.values(col);
  for (let i = 0; i < colValues.length; i++){
    if (colValues[i] !== 1) {
      return false;
    }
    this.rowAndColumn[i] += colValues[i];
  }
  return true
}

SudokuBoard.prototype.combineRowAndColumn = function () {

}

SudokuBoard.prototype.testRowAndColumn = function () {
  
}





// This is taking in the number object that has the key-value pairs for each row and columnn where the number is the key and the value is how many of those numbers exist
export function sudokuRowAndColChecker(row, col) {
  const rowValues = Object.values(row);
  const colValues = Object.values(col);
  let rowAndColValues = [];
  for (let i = 0; i < rowValues.length; i++) {
    if (rowValues[i] !== 1) {
      return false;
    }
    rowAndColValues.push(rowValues[i]);
  }

  for (let i = 0; i < colValues.length; i++){
    if (colValues[i] !== 1) {
      return false;
    }
    rowAndColValues[i] += colValues[i];
  }

  for (let i = 0; i < rowAndColValues.length; i++){
    if (rowAndColValues[i] !== 2) {
      return false;
    }
  }

  return true;
}

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





// row
// 223344551

// column
// 166778899