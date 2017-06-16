// From Codewars:

// Description:

// Given two strings s1 and s2, we want to visualize how 
// different the two strings are. We will only take into 
// account the lowercase letters (a to z). First let us 
// count the frequency of each lowercase letters in s1 and s2.

// s1 = "A aaaa bb c"

// s2 = "& aaa bbb c d"

// s1 has 4 'a', 2 'b', 1 'c'

// s2 has 3 'a', 3 'b', 1 'c', 1 'd'

// So the maximum for 'a' in s1 and s2 is 4 from s1; the 
// maximum for 'b' is 3 from s2. In the following we will 
// not consider letters when the maximum of their 
// occurrences is less than or equal to 1.

// We can resume the differences between s1 and s2 in the 
// following string: "1:aaaa/2:bbb" where 1 in 1:aaaa 
// stands for string s1 and aaaa because the maximum for 
// a is 4. In the same manner 2:bbb stands for string s2 
// and bbb because the maximum for b is 3.

// The task is to produce a string in which each lowercase 
// letters of s1 or s2 appears as many times as its 
// maximum if this maximum is strictly greater than 1; 
// these letters will be prefixed by the number of the 
// string where they appear with their maximum value and :. 
// If the maximum is in s1 as well as in s2 the prefix is =:.

// In the result, substrings will be in decreasing order of 
// their length and when they have the same length sorted 
// alphabetically (more precisely sorted by codepoint); 
// the different groups will be separated by '/'.

// Hopefully other examples can make this clearer.

// s1 = "my&friend&Paul has heavy hats! &"
// s2 = "my friend John has many many friends &"
// mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
// s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
// mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

// s1="Are the kids at home? aaaaa fffff"
// s2="Yes they are here! aaaaa fffff"
// mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"



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











