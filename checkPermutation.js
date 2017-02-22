// Check if one string is a permutation of another

var str1 = 'abcdefg';
var str2 = 'gfedcba';

var str3 = 'abbsres';
var str4 = 'absrebs';

var str5 = 'abbsres';
var str6 = 'abbsre';

var str7 = 'abbsres';
var str8 = 'abbsret';

var str9 = 'Abbsres';
var str10 = 'absrebs';



var checkPermutation = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  var str1Sorted = str1.split('').sort();
  var str2Sorted = str2.split('').sort();
  for (var i = 0; i < str1.length; i++) {
    if (str1Sorted[i] !== str2Sorted[i]) {
      return false;
    }
  }
  return true;
}