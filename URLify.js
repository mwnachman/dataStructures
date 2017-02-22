// Replace all spaces in a string with %20

var str1 = 'abc def';
var str2 = 'abc defg   ';

var URLify = function(string) {
  // Get rid of trailing whitespace
  var str = string.split(' ');
  for (var i = str.length - 1; i >= 0; i--) {
    while (str[i] === '') {
      str.pop();
    }
  }
  return str.join('%20');
}