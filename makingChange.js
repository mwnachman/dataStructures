// Three ways to write this function:

// Let's use cents:
// var denominations = [1, 5, 10, 25, 50, 100]

// Vanilla recursion:

var makeChange = function(amountChange, denominations) {

  // denominations must be in ascending order
  denominations = denominations.slice().sort(function(a,b) {return a - b});

  var count = 0;

  var recurse = function(amountLeft, index) {
    // base case:
    if (index === 0) {
      return count++;
    } 
    while (amountLeft >= 0) {
      recurse(amountLeft, index - 1);
      amountLeft -= denominations[index];
    }
  }
  recurse(amountChange, denominations.length - 1);

  return count;
}


// Another way to do it with vanilla recursion (this solution is a variation
// on Interview Cake's solution) -- it's a little bit slower than mine:

var makeChange = function(amountLeft, denominations, index) {
    index = index || 0;

    // denominations must be in descending order
    denominations = denominations.slice().sort(function(a,b){return b - a})

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left 
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (index === denominations.length) return 0;

    // console.log('amountLeft: ', amountLeft, 'denominations remaining: ', denominations.slice(index));
    // see how many possibilities we can get
    // for each number of times we use the current denomination
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += makeChange(amountLeft,
            denominations, index + 1);
        amountLeft -= denominations[index];
    }

    return numPossibilities;
};


// Memoized -- a little bit slower than my solution but 
// faster than the Interview Cake solution (and presumably 
// with accumulating results, this would become faster than
// my solution as well -- and obviously I could try memoizing
// my own solution, but it was more complicated with the internal
// function so I haven't tried it yet):

var makeChange = (function() {

  var makeChangeHash = {};

  var mkChg = function(amountLeft, denominations, index) {

    index = index || 0;

    // denominations must be in descending order
    denominations = denominations.slice().sort(function(a,b){return b - a})

    // base cases:
    if (amountLeft === 0) return 1;

    if (amountLeft < 0) return 0;

    if (index === denominations.length) return 0;

    var numPossibilities = 0;
    while (amountLeft >= 0) {
      // console.log('json stringify', JSON.stringify(arguments));
      if (makeChangeHash[JSON.stringify(arguments)]) {
        numPossibilities += makeChangeHash[JSON.stringify(arguments)];
        amountLeft -= denominations[index];
      } else {
        makeChangeHash[JSON.stringify(arguments)] 
          = makeChange(amountLeft, denominations, index + 1);
        numPossibilities += makeChangeHash[JSON.stringify(arguments)]
        amountLeft -= denominations[index];
      } 
    }
    // console.log('makeChangeHash', makeChangeHash);
    return numPossibilities;

  }

  return mkChg;
})();




console.time('MakeChange');
console.log('makeChange', makeChange(8, denominations));
console.log('makeChange', makeChange(10, denominations));
console.log('makeChange', makeChange(15, denominations));
console.log('makeChange', makeChange(25, denominations));
console.log('makeChange', makeChange(45, denominations));
console.timeEnd('MakeChange');
console.time('MakeChange');
console.log('makeChange', makeChange(50, denominations));
console.timeEnd('MakeChange');
console.time('MakeChange');
console.log('makeChange', makeChange(60, denominations));
console.timeEnd('MakeChange');
console.time('MakeChange');
console.log('makeChange', makeChange(70, denominations));
console.timeEnd('MakeChange');


















