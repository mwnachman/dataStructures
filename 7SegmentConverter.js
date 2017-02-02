// From Codewars:

// Description:

// A 7-segment converter is basically a fancy way of saying a component that turns a number into instructions for a digital clock display.

// For this kata, you need to write a function, sevenSegmentNumber(number), that returns the correct binary input for the display.

// The display has 7 segments that look like this:

//  _ 
// |_|
// | |
//  ¯ 
// Each segment is turned on or off to form a number from 0 to 9. The instruction it takes is in the form of a single binary stream that looks something like this: 1011010. Each bit tells the display if the corresponding segment should be on or off.

// The bits for each segment are in the following order, from right to left: (Binary always reads from right to left!)

// Top Horizontal
// Middle Horizontal
// Bottom Horizontal
// Top-Left Vertical
// Top-Right Vertical
// Bottom-Left Vertical
// Bottom-Right Vertical
// So the example instruction above, 1011010 would result in the display only showing the middle, top-left, top-right, and bottom-right segments, forming the shape of a 4. That means that, for the number 4, your function should return 90, which has exactly the same binary representation: 1011010.

// If you can do this for each of the other 9 digits, you'll pass the test!

// (You should also throw an error if the number passed to the function is not valid, and not a single-digit number.)

// I have included a helper function, display(input) which will return some HTML for you to log out to the console, which will show you how the given number input would displayed.

// Here's each digit, shown as it should be implemented:

//  _ 
// | |
// | |
//  ¯ 
 
//   |
//   |

//  _ 
//  _|
// |  
//  ¯ 
//  _ 
//  _|
//   |
//  ¯ 
 
// |_|
//   |

//  _ 
// |_ 
//   |
//  ¯ 
//  _ 
// |_ 
// | |
//  ¯ 
//  _ 
//   |
//   |

//  _ 
// |_|
// | |
//  ¯ 
//  _ 
// |_|
//   |
//  ¯ 


function sevenSegmentNumber(number) {
  if (number === 0){
    // number = '1111101';
    return 125;
  }
  else if (number === 1){
    // number = '1010000';
    return 80;  }
  else if (number === 2){
    // number = '0110111';
    return 55;
  }
  else if (number === 3){
    // number = '1010111';
    return 87;
  }
  else if (number === 4){
    // number = '1011010';
    return 90;
  }
  else if (number === 5){
    // number = '1001111';
    return 79;
  }
  else if (number === 6){
    // number = '1101111';
    return 111;
  }
  else if (number === 7){
    // number = '1010001';
    return 81;
  }
  else if (number === 8){
    // number = '1111111';
    return 127;
  }
  else if (number === 9){
    // number = '1011111';
    return 95;
  }
}















