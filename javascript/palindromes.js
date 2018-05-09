// PALINDROME ALGOS:

// Returns true if any combination of the letters in the
// string is a palindrome:
// 'trirt' => true;
// 'ggtyt' => true; ('gtytg' or 'tgygt')
// 'ggtri' => false;

var canMakePalindrome = function(str) {
  var oddNumberOccurrences = [];
  for (var i = 0; i < str.length; i++) {
    var index = oddNumberOccurrences.indexOf(str[i]);
    if (index < 0) {
      oddNumberOccurrences.push(str[i]);
    } else {
      oddNumberOccurrences.splice(index, 1);
    }
  }
  return oddNumberOccurrences.length === 1 ? true : false;  
}

// or, using Sets:

var canMakePalindrome = function(str) {
  var oddNumberOccurrences = new Set();
  for (var i = 0; i < str.length; i++) {
    if (oddNumberOccurrences.has(str[i])) {
      oddNumberOccurrences.delete(str[i]);
    } else {
      oddNumberOccurrences.add(str[i]);
    }
  }
  return oddNumberOccurrences.size === 1 ? true : false;  
}

var longestPalindrome = function(str) {
  // Not yet completed
}
