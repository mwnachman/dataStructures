// Find the biggest increase between two values in an array
// where the indices indicate order in time.  For instance,
// var arr = [3, 6, 8, 1, 5, 3, 7];  The biggest increase 
// is 6 (from 1 to 7); even though 8 is the largest number
// in the array, it comes before 1, so it is earlier in time
// and the biggest increase before it (from 3 to 8 === 5) is
// less than 6.

// O(n) time complexity and constant space:

function biggestIncreaseV2(arrayOfNumbers) {
  
  let maxDiff = 0;
  let min = arrayOfNumbers[0];

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < min) {
      min = arrayOfNumbers[i];
    }
    if (arrayOfNumbers[i] - min > maxDiff) {
      maxDiff = arrayOfNumbers[i] - min;
    }
  }
  return maxDiff;
};
