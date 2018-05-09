// var arr = [55, 22, 33, 1, 6, 34, 98, 22, 43, 56, 55, 23];

var sortArrayWithMax = function(arr, max) {
  var tempArr = [];
  var sortedArray = [];
  for (var i = 0; i <= max; i++) {
    tempArr[i] = 0;
  }
  for (var j = 0; j < arr.length; j++) {
    tempArr[arr[j]] += 1;
  }
  for (var k = 0; k < tempArr.length; k++) {
    for (var l = 0; l < tempArr[k]; l++) {
      sortedArray.push(k);
    }
  }
  return sortedArray;
}
