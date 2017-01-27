// var arr = ['hi', 'bye', 'hello', 'ciao'];
// var subset = ['hello', 'bye'];

var arraySubset = function(subset, arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[subset[i]] = 1;
  }
  for (var j = 0; j < subset.length; j++) {
    if (obj[subset[j]] !== 1) {
      return false;
    }
  }
  return true;
}