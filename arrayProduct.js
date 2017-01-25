// Input is an array, and you need to return an
// array that contains the product of all numbers
// in the array except the number at that index.

// [3, 5, 2, 7] => [70, 42, 105, 30];

var arrayProduct = function(arr) {
  var result = [];
  var prodBeforeIndex = [];
  var prodAfterIndex = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      prodBeforeIndex[i] = 1;
    } else {
      prodBeforeIndex[i] = prodBeforeIndex[i - 1] * arr[i - 1];
    }
  }
  for (var j = arr.length - 1; j >= 0; j--) {
    if (j === arr.length - 1) {
      prodAfterIndex[j] = 1;
    } else {
      prodAfterIndex[j] = prodAfterIndex[j + 1] * arr[j + 1];
    }
  }
  for (var k = 0; k < arr.length; k++) {
    result.push(prodBeforeIndex[k] * prodAfterIndex[k]);
  }
  return result;
}

// To do it with less space (one array instead of three):


var arrayProduct = function(arr) {
  var result = [];
  var tempProd = 1;
  for (var i = 0; i < arr.length; i++) {
    if (i === 0) {
      result[i] = 1;
    } else {
      result[i] = result[i - 1] * arr[i - 1];
    }
  }
  for (var j = arr.length - 1; j >= 0; j--) {
    if (j === arr.length - 1) {
      result[j] = result[j];
    } else {
      tempProd = tempProd * arr[j + 1];
      result[j] = result[j] * tempProd;
    }
  }
  return result;
}



