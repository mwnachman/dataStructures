// iterative version

var binarySearchArray = function(arr, target) {
  var lowerBoundIndex = -1;
  var upperBoundIndex = arr.length;

  while (lowerBoundIndex + 1 < upperBoundIndex) {
    var difference = upperBoundIndex - lowerBoundIndex;
    var currentIndex = lowerBoundIndex + Math.floor(difference / 2);
    if (arr[currentIndex] === target) {
      return currentIndex;
    } else if (arr[currentIndex] < target) {
      lowerBoundIndex = currentIndex;
    } else {
      upperBoundIndex = currentIndex;
    }
  }
  return false;
}

// can also be done recursively

// TODO