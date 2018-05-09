// Find the largest product possible out of any three
// numbers in an array

// My solution:

var largestProductofThree = function(arr) {
  var sorted = arr.slice().sort(function(a, b){return a-b});
  var topTwo = sorted[sorted.length - 2] * sorted[sorted.length - 1];
  var highest = sorted[sorted.length - 1];
  var thirdHighest = sorted[sorted.length - 3];
  var bottomTwo = sorted[0] * sorted[1];
  return topTwo * thirdHighest >= bottomTwo * highest ? topTwo * thirdHighest : bottomTwo * highest;
}


// [1, 10, -5, 50, -100] => 5000
// [-1, -10, 5, 11, -2, -100, 50]


// Hack Reactor solution:

var largestProductofThree = function(arr) {
  var largest = [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE];
  var smallest = [Number.MAX_VALUE, Number.MAX_VALUE];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest[0]) {
      largest[0] = arr[i];
      largest.sort(function(a, b){return a-b});
    } 
    if (arr[i] < smallest[1]) {
      smallest[1] = arr[i];
      smallest.sort(function(a, b){return a-b});
    }
  }
  var topTwo = largest[1] * largest[2];
  var thirdHighest = largest[0];
  var bottomTwo = smallest[0] * smallest[1];
  return topTwo * thirdHighest >= bottomTwo * largest[2] ? topTwo * thirdHighest : bottomTwo * largest[2];
}
