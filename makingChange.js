// Let's use cents:
// denominations = [1, 5, 10, 25, 50, 100]

var makeChange = function(amountChange, denominations) {

  var count = 0;

  var recurse = function(amountLeft, index) {
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





