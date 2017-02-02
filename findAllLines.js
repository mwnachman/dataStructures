// Should find a better way to eliminate duplicates, but this works.
// Vertical lines are identified only as {b: false, m: undefined}
// Could be re-factored to have x-intercept instead.

// var set = [[-1, 5], [0, 5], [1, 5], [-1, 2], [1, -2], [-1, -1], [0, 0], [1, 1], [3, 5], [2, 2], [6, 10], [2, 4], [3, 7]];

// Find all lines that have more than two points on 
// them from the input set;

// input is an array of tuples with [x, y] coordinates

// helper functions to find slope and y-intercept
var findSlope = function(p1, p2) {
  if (p1[0] - p2[0] === 0) {
    return undefined;
  } else {
    return (p1[1] - p2[1]) / (p1[0] - p2[0]) === -0 ? 0 : (p1[1] - p2[1]) / (p1[0] - p2[0]);
  }
}

var findYIntercept = function(p1, slope) {
  if (slope === undefined) {
    return false;
  } else {
    console.log('negative zero', p1[1], p1[0], slope, p1[1] - (p1[0] * slope));
    return p1[1] - (p1[0] * slope);
  }
}

var findAllLines = function(set) {
  var lines = [];

  // loop through the set 
  for (var i = 0; i < set.length; i++) {
    // for each point, create a hash table
    var hT = {};
    var currentPoint = set[i];
    // loop through the remaining points 
    for (var j = i + 1; j < set.length; j++) {
      // add the slope of the line between the two points to the hash table
      var slope = findSlope(currentPoint, set[j]);
      if (slope === undefined) {
        var line = {b: false, m: undefined};
        var alreadyExists = false;
        for (var l = 0; l < lines.length; l++) {
          if (lines[l]['b'] === false && lines[l]['m'] === undefined) {
            alreadyExists = true;
          }
        }
        if (alreadyExists === false) {
          lines.push(line);
        }
      } else if (hT[slope]) {
          // if this is the third point in the line, find the y-intercept and add to results
          if (hT[slope] === 1) {
            var yIntercept = findYIntercept(currentPoint, slope);
            var alreadyExists = false;
            // prevent duplicate results
            for (var k = 0; k < lines.length; k++) {
              if (lines[k]['m'] === slope && lines[k]['b'] === yIntercept) {
                alreadyExists = true;
              }
            }
            if (alreadyExists === false) {
              lines.push({m: slope, b: yIntercept});
            } 
            // increment count so doesn't get added again in this loop
            hT[slope] += 1;
          } else {
            // increment count 
            hT[slope] += 1;
          }
        } else {
          // create hash table entry for this slope if it doesn't already have an entry
          hT[slope] = 1;
        }
    }
  }
  return lines;
}












