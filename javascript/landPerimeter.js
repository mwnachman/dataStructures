function landPerimeter(arr) {
  
  var height = arr.length - 1
  var length = arr[0].length - 1

  var perimeter = 0

  for (i = 0; i <= height; i++) {
    for (j = 0; j <= length; j++) {
      if (arr[i][j] === 'X') {
        perimeter += i === 0 || (arr[i-1][j] === 'O') ? 1 : 0
        perimeter += i === height - 1 || arr[i+1][j] === 'O') ? 1 : 0
        perimeter += j === 0 || arr[i][j-1] === 'O') ? 1 : 0
        perimeter += j === length - 1 || arr[i][j+1] === 'O') ? 1 : 0
      }
    }
  }

  return 'Total land perimeter: ' + perimeter

}