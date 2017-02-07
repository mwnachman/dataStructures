// Four different ways to calculate a factorial, 
// in increasing complexity:

// 4! = 4 * 3 * 2 * 1

// Iterative:

var factorial = function(n) {
    var product = 1;
    for (var i = 1; i <= n; i++) {
        product = product * i;
    }
    return product;
};

// Recursive:

var factorial1 = function(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


// Using past resulted saved in a hash table:

var factorialHash = {};

var factorial = function(n) {
    if (n === 1) {
        return 1;
    }
    if (factorialHash[n-1]) {
        factorialHash[n] = n * factorialHash[n-1] 
    } else {
        factorialHash[n] = n * factorial(n-1);
    }
    
    return factorialHash[n];
    
}


// With memoization:

var factorial = (function () {
    
    var factorialHash = {};
    
    var fact = function (n) {
        
        if (n === 1) {
            return 1;
        }
        if (factorialHash[n-1]) {
            // console.log('in factorial exists');
            factorialHash[n] = n * factorialHash[n-1]; 
        } else {
            // console.log('in factorial must be calculated');
            factorialHash[n] = n * factorial(n - 1);
        }

        return factorialHash[n];
    }
    
    return fact;
    
}());



console.time('Fact');
console.log('Factorial', factorial(8))
console.log('Factorial', factorial(10))
console.log('Factorial', factorial(15))
console.log('Factorial', factorial(25))
console.log('Factorial', factorial(30))
console.time('Fact');
console.timeEnd('Fact');
console.log('Factorial', factorial(60))
console.timeEnd('Fact');