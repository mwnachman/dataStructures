// Let's use cents:
// denominations = [1, 5, 10, 25, 50, 100]

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


// Another way to do it with vanilla recursion:

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

    console.log('checking ways to make ' + amountLeft + ' with ' + denominations.slice(index));
    // see how many possibilities we can get
    // for each number of times we use the current denomination
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        numPossibilities += makeChange(amountLeft,
            denominations, index + 1);
        amountLeft -= denominations[index];
    }

    return numPossibilities;
}



// Memoized:











































