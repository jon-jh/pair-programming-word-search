const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const columnLength = letters.length;
  const rowsLength = letters[0].length;

  // Insert array transpose function here, flip array, and run horizontal word search again to accomplish searching through the array vertically.

  let newMatrix = [];

  // Create an empty array for each column in the original matrix
  for (let i = 0; i < rowsLength; i++) {
    newMatrix[i] = [];
    // Add the relative part of the original matrix
    for (let j = 0; j < columnLength; j++) {
      newMatrix[i][j] = letters[j][i];
    }

  }

  const verticalJoin = newMatrix.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;

};

module.exports = wordSearch;