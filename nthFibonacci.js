// recursive solution -- exponential time complexity (will crash)

var nthFibonacci = function(n) {
  return n > 2 ? nthFibonacci(n - 1) + nthFibonacci(n - 2) : 1;
}


// saner, looping version:

var nthFibonacci = function(n) {
  var arr = [0, 1];
  if (n > 1) {
    for (var i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);  
    }
  }
  return arr[n];
}





