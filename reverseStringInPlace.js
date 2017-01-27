var reverseStringInPlace = function(str) {
  var arr = str.split('');
  for (var i = 0; i < arr.length/2; i++) {
    var tempVal = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVal;
  }
  return arr.join('');
}