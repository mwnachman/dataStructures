// From Codewars:

// Description:

// Once upon a time, on a way through the old wild west,…

// … a man was given directions to go from one point to 
// another. The directions were "NORTH", "SOUTH", "WEST", "EAST". 
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
// Going to one direction and coming back the opposite direction 
// is a needless effort. Since this is the wild west, with 
// dreadfull weather and not much water, it's important to save 
// yourself some energy, otherwise you might die of thirst!

// How I crossed the desert the smart way.

// The directions given to the man are, for example, the following:

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or

// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or (haskell)

// [North, South, South, East, West, North, West]
// You can immediatly see that going "NORTH" and then "SOUTH" 
// is not reasonable, better stay to the same place! So the task 
// is to give to the man a simplified version of the plan. A 
// better plan in this case is simply:

// ["WEST"]

// Other examples:

// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is 
// going north and coming back right away. What a waste of time! 
// Better to do nothing.

// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate 
// each other, therefore, the final result is [] (nil in Clojure).

// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are 
// not directly opposite but they become directly opposite after the 
// reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task

// Write a function dirReduc which will take an array of strings 
// and returns an array of strings with the needless directions 
// removed (W<->E or S<->N side by side).

// The Haskell version takes a list of directions with 
// data Direction = North | East | West | South. The Clojure 
// version returns nil when the path is reduced to nothing. 
// The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.

// Examples

// See more examples in "Example Tests"

// Note

// All paths can't be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is 
// not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are 
// not directly opposite of each other and can't become such. Hence the result 
// path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].


function dirReduc(arr){
  var newArrSpare = [];
  var newArr = arr;

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  
  function recurse(directionsArray){
    newArrSpare = newArr;
    newArr = [];
    for (var i = 0; i < directionsArray.length; i++){
      var this_direction = directionsArray[i];
      var next_direction = directionsArray[i + 1];
      if (!(this_direction === "WEST" && next_direction === "EAST" ||
            this_direction === "EAST" && next_direction === "WEST" ||
            this_direction === "NORTH" && next_direction === "SOUTH" ||
            this_direction === "SOUTH" && next_direction === "NORTH") ||
            next_direction === undefined) {

            newArr.push(this_direction);
      } else {
        i++;
      };
    };  
    if (arraysEqual(newArr, newArrSpare)) {
      return newArr;
    } else {
      return recurse(newArr);
    };
  };
  return recurse(arr);
}; 






