// Are all the characters in a string unique?

var str = 'hlkjare';
var str1 = 'bartoq jev';
var str2 = 'bar toq jev';
var str3 = 'bartoqjevr';

// With a hash table:

var allUnique = function(string) {
  var hT = {};
  for (var i = 0; i < string.length; i++) {
    if (hT.hasOwnProperty(string[i])) {
      return false;
    }
    else {
      hT[string[i]] = 1;
    }
  }
  return true;
}

// Brute force:

var allUnique = function(string) {
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        console.log('i, j', i, j);
        return false;
      }
    }
  }
  return true;
}