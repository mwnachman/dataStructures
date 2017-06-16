// Break the chain into three parts the least expensive way:

// you can't break on the first or last element
// you can't break on adjacent elements
// you must break in two spots

// for instance:  [5, 2, 6, 1, 3, 0]
// you would break on 2 and 3 (because it sums to 5)
// 1 and 3 would be less, but they are adjacent
// 1, 2, or 3 and 0 would be less, but you can't break
// on zero because it's at the end

function solution(arr) {
  var lowestFour = [[Number.MAX_VALUE], [Number.MAX_VALUE], [Number.MAX_VALUE], [Number.MAX_VALUE]];
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] < lowestFour[3][0]) {
      lowestFour[3] = [arr[i], i];
      lowestFour.sort(function(a, b){return a[0] - b[0]});
    }    
  }
  if (Math.abs(lowestFour[0][1] - lowestFour[1][1]) > 1) {
    return lowestFour[0][0] + lowestFour[1][0];
  } else {
    var firstPair = lowestFour[0][0] + lowestFour[2][0];
    var secondPair = lowestFour[1][0] + lowestFour[3][0];
    return firstPair < secondPair ? firstPair : secondPair;
  }
}


// TESTS


















































