// To find the "rotation point" in logarithmic time for arrays
// of values that are in increasing order, but have been cut
// like a deck, such that there is a point at which they rotate.
// For instance, the switch point of this array is at index 4: 
// const arr = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]

const findRotationPoint = function(arr) {
  let lowerBoundIndex = 0;
  let upperBoundIndex = arr.length - 1;

  while (lowerBoundIndex + 1 < upperBoundIndex) {
    let difference = upperBoundIndex - lowerBoundIndex;
    let currentIndex = Math.floor(lowerBoundIndex + (difference/2));
    if (arr[currentIndex] < arr[upperBoundIndex]) {
      upperBoundIndex = currentIndex;
    } else if (arr[currentIndex] > arr[upperBoundIndex]) {
      lowerBoundIndex = currentIndex;
    } else {
      for (let i = currentIndex - 1; i > 0; i--) {
        if (arr[i] < arr[currentIndex]) {
          lowerBoundIndex = currentIndex + 1
        } else {
          upperBoundIndex = currentIndex - 1
        }
      }
    }
  }
  return upperBoundIndex;
}

const arr1 = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]
const arr2 = [1, 1, 0, 1, 1, 1, 1, 1, 1]
const arr3 = [   
  "ptolemaic",
  "retrograde",
  "supplant",
  "undulate",
  "xenoepist",
  "yahoo",
  "asymptote", 
  "babka",
  "banoffee",
  "engender",
  "karpatka",
  "othellolagkage"]
const arr4 = [5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const arr5 = [8, 9, 0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 11, 12]
const arr6 = [5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 9, 0, 1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10, 11, 12]

console.assert(findRotationPoint(arr1) === 5, 'arr1 failed')
console.assert(findRotationPoint(arr2) === 2, 'arr2 failed')
console.assert(findRotationPoint(arr3) === 6, 'arr3 failed')
console.assert(findRotationPoint(arr4) === 5, 'arr4 failed')
console.assert(findRotationPoint(arr5) === 2, 'arr5 failed')
console.assert(findRotationPoint(arr6) === 11, 'arr6 failed')
