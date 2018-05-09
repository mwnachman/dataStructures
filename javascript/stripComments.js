// From Codewars:

// Description:

// Complete the solution so that it strips all text that 
// follows any of a set of comment markers passed in. Any 
// whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas

// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"


function solution(input, markers){
  var regexDelimiterArray = [];
  for (var i = 0; i < markers.length; i++){
    if (markers[i] === '$'){
      regexDelimiterArray.push("\\" + markers[i])
    }
    regexDelimiterArray.push(markers[i]);
  }
  var regexDelimiter = regexDelimiterArray.join('|');
  regexDelimiter = new RegExp(regexDelimiter);

  var inputArray = input.split('\n');
  var newInputArray = [];

  for (var i = 0; i < inputArray.length; i++){
    var tempArray = inputArray[i].split(regexDelimiter);
    var firstWord = tempArray[0].split('');
    for (var j = 0; j < firstWord.length; j++){
      if (firstWord[firstWord.length-1] === ' '){
        firstWord.pop();
      }
    }
    newInputArray.push(firstWord.join(''));
  }

  return newInputArray.join('\n');
}


