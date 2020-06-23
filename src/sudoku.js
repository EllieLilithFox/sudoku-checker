export function sudokuChecker(numObject) {
  const values = Object.values(numObject);
  for (let i = 0; i < values.length; i++){
    if (values[i] !== 1)
      return false; 
  }
  return true;
}