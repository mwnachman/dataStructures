// rotate a n x m matrix 90 degrees

//  [[1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]]
// =>
//  [[1, 1, 1],
//   [2, 2, 2],
//   [3, 3, 3],
//   [4, 4, 4]] 

var rotateMatrix90Deg = function(arr) {
  var newArr = [];
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (!newArr[i]) {
        newArr[i] = [];
      }
      newArr[i].push(arr[j][i]);
    }
  }
  return newArr;
};