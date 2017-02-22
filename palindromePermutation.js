// Check if a string is a permutation of a palindrome

var str1 = "Tact Coa" // true ('taco cat')
var str2 = 'gitiglluu';
var str3 = 'gitiglluup';

var palindromePermutation = function(string) {
  var hT = {};
  var counter = 0;
  var str = string.toLowerCase().split(' ').join('');
  for (var i = 0; i < str.length; i++) {
    if (hT.hasOwnProperty(str[i])) {
      hT[str[i]] +=1;
    }
    else {
      hT[str[i]] = 1;
    }
  }
  for (var key in hT) {
    if (hT[key] % 2 !== 0) {
      counter++;
    }
  }
  if (counter > 1) {
    return false;
  }
  return true;
}

console.log(palindromePermutation(str1));
console.log(palindromePermutation(str2));
console.log(palindromePermutation(str3));