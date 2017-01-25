Given an array of random integers (a), and a non-negative integer (k), display the number of times 2 numbers in the array have a difference of k

Example 1:
a = [3, 2, 7, 9, 10]
k = 1

Answer:
2

Example 2:
a = [1, 1, 3, 4, 2]
k = 2

Answer: 
3

____________________________________________________________________

// BRUTE FORCE -- O(n^2): 

// loop through array (i)
  // loop through a second time where you start at index one above (j = i + 1)
  

// use hash table -- O(n)

var findNumTimesKDifference2 = (arr, k) => {
  let hT = {};
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!hT[arr[i]]) {
      if (hT[arr[i] - k]) {
        (hT[arr[i] - k]).push(arr[i]);
      } else {
        hT[arr[i] - k] = [arr[i]];
      }
      if (hT[arr[i] + k]) {
        (hT[arr[i] + k]).push(arr[i]); 
      } else { 
        hT[arr[i] + k] = [arr[i]];
      }
    }
    else {
      counter += hT[arr[i]].length;
    }
  }
  return counter;
}



