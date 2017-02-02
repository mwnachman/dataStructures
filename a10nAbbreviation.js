// From Codewars:

// Description:

// The word i18n is a common abbreviation of internationalization 
// the developer community use instead of typing the whole word 
// and trying to spell it correctly. Similarly, a11y is an 
// abbreviation of accessibility.

// Write a function that takes a string and turns any and all 
// "words" (see below) within that string of length 4 or greater 
// into an abbreviation following the same rules.

// Notes:

// A "word" is a sequence of alphabetical characters. By this 
// definition, any other character like a space or hyphen 
// (eg. "elephant-ride") will split up a series of letters 
// into two words (eg. "elephant" and "ride").
// The abbreviated version of the word should have the first 
// letter, then the number of removed characters, then the 
// last letter (eg. "elephant ride" => "e6t r2e").
// Example:

// abbreviate("elephant-rides are really fun!")
// //          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// // words (^):   "elephant" "rides" "are" "really" "fun"
// //                123456     123     1     1234     1
// // ignore short words:               X              X

// // abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// // all non-word characters (*) remain in place
// //                     "-"      " "    " "     " "     "!"
// === "e6t-r3s are r4y fun!"


function mix(s1, s2) {

  var countsS1 = {};
  var countsS2 = {};
  var resultS1 = {};
  var resultS2 = {};
  var resultEqual = {};
  var result = {};
  var resultArray = [];
  for (var i = 0; i < s1.length; i++) {
    var keyS1 = 
        s1[i] != ' ' && 
        s1[i].match(/[a-z]/) && 
        s1[i] === s1[i].toLowerCase() ? s1[i] : 'extra';
    if (keyS1 in countsS1){
      countsS1[keyS1] += 1;
    } else {
      countsS1[keyS1] = 1;
    }
  }

  for (var i = 0; i < s2.length; i++) {
    var keyS2 = 
      s2[i] != ' ' && 
      s2[i].match(/[a-z]/) && 
      s2[i] === s2[i].toLowerCase() ? s2[i] : 'extra';
    if (keyS2 in countsS2) {
      countsS2[keyS2] += 1;
    }
    else {
      countsS2[keyS2] = 1;
    }
  }

  for (var key in countsS1){
    if (countsS1[key] > 1 
        && countsS1[key] === countsS2[key] 
        && key != 'extra') {
      resultEqual[key] = countsS1[key]; 
    } else if (countsS1[key] > 1 
               && (countsS2[key] < countsS1[key] || countsS2[key] === undefined) 
               && key != 'extra' 
               && countsS1[key] != countsS2[key]){
      resultS1[key] = countsS1[key];
    } else if (countsS1[key] < countsS2[key] 
               && countsS2[key] > 1 
               && key != 'extra' 
               && countsS1[key] != countsS2[key]) {
      resultS2[key] = countsS2[key];
    }
  }

  for (var key in countsS2) {
    if (!(key in resultS1) 
        && key != 'extra' 
        && countsS1[key] != countsS2[key]
        && countsS2[key] > 1) {
      resultS2[key] = countsS2[key];
    }
  }

  for (var key in resultS1) {
    var numTimes = resultS1[key];
    var timesCode = Math.floor((1 / numTimes) * 100);
    var charCode = ('0' + key.charCodeAt(0)).slice(-3);
    result[timesCode + '1' + charCode] = ('1:' + key.repeat(numTimes));
  }

  for (var key in resultS2) {
    var numTimes = resultS2[key];
    var timesCode = Math.floor((1 / numTimes) * 100);
    var charCode = ('0' + key.charCodeAt(0)).slice(-3);
    result[timesCode + '2' + charCode] = ('2:' + key.repeat(numTimes));
  }

  for (var key in resultEqual) {
    var numTimes = resultEqual[key];
    var timesCode = Math.floor((1 / numTimes) * 100);
    var charCode = ('0' + key.charCodeAt(0)).slice(-3);
    result[timesCode + '3' + charCode] = ('=:' + key.repeat(numTimes));
  }

  var orderedResult = {};
  Object.keys(result).sort().forEach(function(key) {
    orderedResult[key] = result[key];
  });
  
  for (var key in orderedResult){
    resultArray.push(orderedResult[key]);
  }

  return resultArray.join('/');
}















