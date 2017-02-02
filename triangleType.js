// From Codewars:

// Description:

// In this kata, you should calculate type of triangle with 
// three given sides a, b and c (given in any order).

// If all angles are less than 90°, this triangle is 
// acute and function should return 1.

// If one angle is strictly 90°, this triangle is 
// right and function should return 2.

// If one angle more than 90°, this triangle is 
// obtuse and function should return 3.

// If three sides cannot form triangle, or one angle is 180° 
// (which turns triangle into segment) - function should return 0.

// Input parameters are sides of given triangle. 
// All input values are non-negative floating point or integer 
// numbers (or both).

// Examples:

// triangleType(2, 4, 6); // return 0 (Not triangle)
// triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
// triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
// triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)


/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/


function triangleType(a, b, c){
  if (arguments.length < 3){
    return 0;
  }
  else {
    var aTemp = arguments[0];
    var bTemp = arguments[1];
    var cTemp = arguments[2];
    var arrayTemp = [aTemp, bTemp, cTemp];
    var aUse = Math.min(aTemp, bTemp, cTemp);
    var x = arrayTemp.indexOf(aUse);
    arrayTemp.splice(x, 1);
    var cUse = Math.max(aTemp, bTemp, cTemp);
    var y = arrayTemp.indexOf(cUse);
    arrayTemp.splice(y, 1);
    var bUse = arrayTemp[0];
    if (aUse + bUse <= cUse){
      return 0;
      }
      else if (Math.pow(aUse, 2) + Math.pow(bUse, 2) > Math.pow(cUse, 2)){
        return 1;
      }
      else if (Math.pow(aUse, 2) + Math.pow(bUse, 2) === Math.pow(cUse, 2)){
        return 2;
      }
      else if (Math.pow(aUse, 2) + Math.pow(bUse, 2) < Math.pow(cUse, 2)){
        return 3;
      }
  }
}




