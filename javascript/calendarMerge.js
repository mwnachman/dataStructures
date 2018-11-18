// Merge blocked out times on a calendar to show solid blocks,
// such that:

// [
//     {startTime: 3,  endTime: 5},
//     {startTime: 0,  endTime: 1},
//     {startTime: 4,  endTime: 8},
//     {startTime: 10, endTime: 12},
//     {startTime: 9,  endTime: 10},
// ] =>
// [
//     {startTime: 0, endTime: 1},
//     {startTime: 3, endTime: 8},
//     {startTime: 9, endTime: 12},
// ]

function calendarMerge(arr) {
  let result = [];
  let tempObj = {};
  let sorted = arr.slice().sort(function(a,b){return a.startTime - b.startTime});
  for (let i = 0; i < sorted.length - 1; i++) {
    if (i === 0) {
      tempObj = sorted[i];
    }
    if (sorted[i + 1].startTime <= sorted[i].endTime) {
      tempObj.endTime = Math.max(sorted[i + 1].endTime, tempObj.endTime);
    } else {
      result.push(tempObj);
      tempObj = sorted[i + 1];
    }
  }
  result.push(tempObj);
  return result;
}

