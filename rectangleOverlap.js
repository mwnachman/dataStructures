// Find the dimensions and location in space of the overlap of two
// rectangles, given the leftX and bottomY cordinates, as well as the
// width and height of the two rectanges.

var findOverlap = function(start1, difference1, start2, difference2){
  
  var highestStartPoint = Math.max(start1, start2);
  var lowestEndPoint = Math.min(start1 + difference1, start2 + difference2);

  if (highestStartPoint < lowestEndPoint) {
    return {startPoint : highestStartPoint, difference: lowestEndPoint - highestStartPoint};
  } else {
    return {startPoint: null, difference: null};
  }
};

var findRectangle = function(rectangle1, rectangle2) {

  var result = {};

  var xResults = findOverlap(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
  var yResults = findOverlap(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);

  result.leftX = xResults.startPoint;
  result.bottomY = yResults.startPoint;
  result.width = xResults.difference;
  result.height = yResults.difference;

  return result;

}