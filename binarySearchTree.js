var findRotationPoint = function(arr) {
  var lowerBoundIndex = -1;
  var upperBoundIndex = arr.length;

  while (lowerBoundIndex + 1 < upperBoundIndex) {
    var difference = upperBoundIndex - lowerBoundIndex;
    var currentIndex = Math.floor(lowerBoundIndex + (difference/2));
    if (arr[currentIndex] > arr[upperBoundIndex]) {
      lowerBoundIndex = arr[currentIndex];
    } else {
      upperBoundIndex = arr[currentIndex];
    }
  }

  return arr[lowerBoundIndex] < arr[upperBoundIndex] ? arr[lowerBoundIndex] : arr[upperBoundIndex];
}