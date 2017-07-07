// var str = "sentence backwards a is this";

var reverseWordOrder = function(str) {
  var arr = str.split(' ');
  for (var i = 0; i < arr.length/2; i++) {
    var tempWord = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempWord;
  }
  return arr.join(' ');
}
