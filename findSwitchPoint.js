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
    if (arr[currentIndex] > arr[upperBoundIndex]) {
      lowerBoundIndex = currentIndex;
    } else {
      upperBoundIndex = currentIndex;
    }
  }

  return upperBoundIndex;
}
