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
  console.log('largest', largest);
  console.log('smallest', smallest);
  var topTwo = largest[1] * largest[2];
  var thirdHighest = largest[0];
  var bottomTwo = smallest[0] * smallest[1];
  return topTwo * thirdHighest >= bottomTwo * largest[2] ? topTwo * thirdHighest : bottomTwo * largest[2];
}


// [1, 10, -5, 50, -100] => 5000
// [-1, -10, 5, 11, -2, -100, 50]