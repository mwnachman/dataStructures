// Find the dimensions and location in space of the overlap of two
// rectangles, given the leftX and bottomY cordinates, as well as the
// width and height of the two rectanges.
// Should account for rectangles that do not overlap and rectangles
// with adjacent edges but no overlap, and rectangles that subsume one another.

const findOverlap = function(start1, difference1, start2, difference2){
  const highestStartPoint = Math.max(start1, start2);
  const lowestEndPoint = Math.min(start1 + difference1, start2 + difference2);

  if (highestStartPoint < lowestEndPoint) {
    return {startPoint : highestStartPoint, difference: lowestEndPoint - highestStartPoint};
  } else {
    return {startPoint: null, difference: null};
  }
};

const findOverlappingRectangle = function(rectangle1, rectangle2) {
  let result = {};
  const xResults = findOverlap(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
  const yResults = findOverlap(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);

  result.leftX = xResults.startPoint;
  result.bottomY = yResults.startPoint;
  result.width = xResults.difference;
  result.height = yResults.difference;

  if (result.width === null || result.height === null) {
    result = null;
  }
  return result;
}


// deepEqual function to check returned object against expected solution:

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}


// TESTS:

// const rect1 = {
//   leftX: 2,
//   bottomY: 2,
//   width: 4,
//   height: 4
// }

// const rect2 = {
//   leftX: -3,
//   bottomY: -3,
//   width: 8,
//   height: 6
// }

// const rect3 = {
//   leftX: -6,
//   bottomY: -7,
//   width: 4,
//   height: 2
// }

// const rect4 = {
//   leftX: -7,
//   bottomY: 2,
//   width: 5,
//   height: 4
// }

// const rect5 = {
//   leftX: 2,
//   bottomY: -6,
//   width: 5,
//   height: 3
// }

// const rect6 = {
//   leftX: 2,
//   bottomY: 2,
//   width: 4,
//   height: 4
// }

// const rect7 = {
//   leftX: 1,
//   bottomY: 0,
//   width: 6,
//   height: 7
// }

// const comparison1 = findOverlappingRectangle(rect1, rect2)
// const comparison2 = findOverlappingRectangle(rect2, rect4)
// const comparison3 = findOverlappingRectangle(rect4, rect3)
// const comparison4 = findOverlappingRectangle(rect2, rect5)
// const comparison5 = findOverlappingRectangle(rect1, rect6)
// const comparison6 = findOverlappingRectangle(rect1, rect7)

// console.assert(deepEqual(comparison1, { leftX: 2, bottomY: 2, width: 3, height: 1 }), 'rect1, rect2 failed')
// console.assert(deepEqual(comparison2, { leftX: -3, bottomY: 2, width: 1, height: 1 }), 'rect2, rect4 failed')
// console.assert(comparison3 === null, 'rect4, rect3 failed')
// console.assert(comparison4 === null, 'rect2, rect5 failed')
// console.assert(deepEqual(comparison5, { leftX: 2, bottomY: 2, width: 4, height: 4 }) , 'rect1, rect6 failed')
// console.assert(deepEqual(comparison6, { leftX: 2, bottomY: 2, width: 4, height: 4 }) , 'rect1, rect7 failed')
