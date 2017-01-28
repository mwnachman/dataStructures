// var set = [[-1, -1], [0, 0], [1, 1], [3, 5], [2, 2], [6, 10], [2, 4], [3, 7]];


// Find all lines that have more than two points on 
// them from the input set;

// input is an array of tuples with [x, y] coordinates

// helper functions to find slope and y-intercept
var findSlope = function(p1, p2) {
  return (p1[1] - p2[1]) / (p1[0] - p2[0]);
}

var findYIntercept = function(p1, slope) {
  return p1[1] - (p1[0] * slope);
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
      if (hT[slope]) {
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












