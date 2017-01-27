var findRotationPoint = function(arr) {
  var lowerBoundIndex = 0;
  var upperBoundIndex = arr.length - 1;

  while (lowerBoundIndex + 1 < upperBoundIndex) {
    var difference = upperBoundIndex - lowerBoundIndex;
    var currentIndex = Math.floor(lowerBoundIndex + (difference/2));
    if (arr[currentIndex] > arr[upperBoundIndex]) {
      lowerBoundIndex = arr[currentIndex];
    } else {
      upperBoundIndex = arr[currentIndex];
    }
  }

  return upperBoundIndex;
}