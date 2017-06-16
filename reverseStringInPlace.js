// Just like it sounds.  Reverse a string with
// minimal space complexity

const reverseStringInPlace = function(str) {
  let arr = str.split('');
  for (let i = 0; i < arr.length/2; i++) {
    let tempVal = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVal;
  }
  return arr.join('');
}

const str1 = "as;ldfasdflj"
const str2 = "b"
const str3 = "jjjjjjd"
const str4 = "abcdefghijklmnopqrstuvwxyz"
const str5 = " "
const str6 = " t aer a r/ ar "
const str7 = ""

console.assert(reverseStringInPlace(str1) === "jlfdsafdl;sa", '1 failed')
console.assert(reverseStringInPlace(str2) === "b", '2 failed')
console.assert(reverseStringInPlace(str3) === "djjjjjj", '3 failed')
console.assert(reverseStringInPlace(str4) === "zyxwvutsrqponmlkjihgfedcba", '4 failed')
console.assert(reverseStringInPlace(str5) === " ", '5 failed')
console.assert(reverseStringInPlace(str6) === " ra /r a rea t ", '6 failed')
console.assert(reverseStringInPlace(str7) === "", '7 failed')
