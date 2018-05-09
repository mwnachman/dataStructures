// Break the chain into three parts the least expensive way:

// Rules:
// 1. you can't break on the first or last element
// 2. you can't break on adjacent elements
// 3. you must break in two spots

// For instance:  [5, 2, 6, 1, 1, 0]
// You would break on 2 and 1 (because it sums to 3).
// 1 and 1 would be less, but they are adjacent.
// 1 or 2 and 0 would be less, but you can't break
// on zero because it's at the end.

const breakChain = function(arr) {
  const lowestFour = [[Number.MAX_VALUE], [Number.MAX_VALUE], [Number.MAX_VALUE], [Number.MAX_VALUE]];
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] < lowestFour[3][0]) {
      lowestFour[3] = [arr[i], i];
      lowestFour.sort(function(a, b){return a[0] - b[0]});
    }    
  }
  if (Math.abs(lowestFour[0][1] - lowestFour[1][1]) > 1) {
    return lowestFour[0][0] + lowestFour[1][0];
  } else {
    const firstPair = lowestFour[0][0] + lowestFour[2][0];
    const secondPair = lowestFour[1][0] + lowestFour[3][0];
    return firstPair < secondPair ? firstPair : secondPair;
  }
}

// TESTS

const arr1 = [5, 2, 6, 1, 1, 0]
const arr2 = [0, 4, 3, 5, 1, 2, 4]
const arr3 = [1, 1, 1, 1, 1, 1, 1]
const arr4 = [-3, -4, -1, 0, 1]
const arr5 = [-3, -4, -1, 0, 1, -2, -7]

console.assert(breakChain(arr1) === 3, '1 failed')
console.assert(breakChain(arr2) === 4, '2 failed')
console.assert(breakChain(arr3) === 2, '3 failed')
console.assert(breakChain(arr4) === -4, '4 failed')
console.assert(breakChain(arr5) === -6, '5 failed')
