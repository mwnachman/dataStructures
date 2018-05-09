// Check how many mines there are at each square using 
// an input of 0's (no bomb) and -1's (bomb) and return
// an array of arrays with those numbers, keeping the 
// -1's as bombs and putting the number of adjacent 
// bombs in place of the zeros

// e.g.:
// [ [  0,  0, -1,  0 ],
//   [ -1,  0,  0,  0 ],
//   [  0,  0,  0,  0 ],
//   [  0, -1,  0,  0 ]
// ]

// returns:
// [ [  1,  2, -1,  1 ],
//   [ -1,  2,  1,  1 ],
//   [  2,  2,  1,  0 ],
//   [  1, -1,  1,  0 ]
// ]

// Helper function: 

var checkRow = function(array, i, j, realI) {
  var countRow = 0;
  if (array[i] !== undefined) {
    for (var k = j - 1; k <= j + 1; k++) {
      if (i === realI && k === j) {
        continue;
      } else if (array[i][k] === -1) {
        countRow++;
      }
    }
  } 
  return countRow;
};

// Main function: 

var adjacentMines = function(array) {
  var adjacentMinesArray = [];
  for (var i = 0; i < array.length; i++) {
    adjacentMinesArray[i] = [];
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === -1) {
        adjacentMinesArray[i][j] = -1;
      } else {
        var count = checkRow(array, i - 1, j, i) 
                    + checkRow(array, i + 1, j, i) 
                    + checkRow(array, i, j, i);
        adjacentMinesArray[i][j] = count;
      }
    }
  }
  return adjacentMinesArray;
}



