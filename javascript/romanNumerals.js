// This function turns a number (up to 3999) into a Roman numeral:

function createNumeral(number){
  var romanNumeral = ''
  var letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  for (var i = 0; i < letters.length; i++) {
    while (number >= values[i]) {
      romanNumeral += letters[i];
      number -= values[i]
    }
  }
  return romanNumeral
}

// Tests:

// console.assert(createNumeral(1) === 'I', '1 passed')
// console.assert(createNumeral(4) === 'IV', '2 passed')
// console.assert(createNumeral(50) === 'L', '3 passed')
// console.assert(createNumeral(49) === 'XLIX', '4 passed')
// console.assert(createNumeral(89) === 'LXXXIX', '5 passed')
// console.assert(createNumeral(499) === 'CDXCIX', '6 passed')
// console.assert(createNumeral(999) === 'CMXCIX', '7 passed')
// console.assert(createNumeral(1000) === 'M', '8 passed')
// console.assert(createNumeral(1990) === 'MCMXC', '9 passed')
// console.assert(createNumeral(2007) === 'MMVII', '10 passed')
