// PALINDROME ALGOS:

// is palindrome???

// Returns the first character of the string str
function firstCharacter(str) => {
    return str.slice(0, 1);
};

// Returns the last character of a string str
function lastCharacter(str) => {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
function middleCharacters(str) => {
    return str.slice(1, -1);
};

function isPalindrome(str) => {
    // base case
    if (str.length <= 1) {
        return true;
    }
    // recursive case
    if (firstCharacter(str) === lastCharacter(str)) {
        return isPalindrome(middleCharacters(str));
    } else {
        return false;
    }
};

// function checkPalindrome(str) => {
//     console.log("Is this word a palindrome? " + str);
//     console.log(isPalindrome(str));
// };

// checkPalindrome("a");
// checkPalindrome("motor");
// checkPalindrome("rotor");
// checkPalindrome("aa");
// checkPalindrome("");




// Is permutation of palindrome????

// Returns true if any combination of the letters in the
// string is a palindrome:
// 'trirt' => true;
// 'ggtyt' => true; ('gtytg' or 'tgygt')
// 'ggtri' => false;

// Check if a string is a permutation of a palindrome

// var str1 = "Tact Coa" // true ('taco cat')
// var str2 = 'gitiglluu';
// var str3 = 'gitiglluup';

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
