// From Codewars:

// Description:

// The rgb() method is incomplete. Complete the method 
// so that passing in RGB decimal values will result in 
// a hexadecimal representation being returned. The valid 
// decimal values for RGB are 0 - 255. Any (r,g,b) argument 
// values that fall out of that range should be rounded 
// to the closest valid value.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b){
  
  var hexArray = [];
  
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  
  var rToUse = r >= 255 ? 255 : (r <= 0 ? 0 : r );
  var gToUse = g >= 255 ? 255 : (g <= 0 ? 0 : g );
  var bToUse = b >= 255 ? 255 : (b <= 0 ? 0 : b );
  
  var findFirstDigit = function(colorValue){
    var y = colorValue >= 16 ? Math.floor(colorValue / 16) : colorValue;
    return y < 10 ? y :
        y === 15 ? "F" :
        y === 14 ? "E" :
        y === 13 ? "D" :
        y === 12 ? "C" :
        y === 11 ? "B" : 
        y === 10 ? "A" :
        "error"
    }
    
  var findSecondDigit = function(colorValue){
    return colorValue % 16 < 10 ? colorValue % 16 : 
            colorValue % 16 === 10 ? "A" :
            colorValue % 16 === 11 ? "B" :
            colorValue % 16 === 12 ? "C" :
            colorValue % 16 === 13 ? "D" :
            colorValue % 16 === 14 ? "E" :
            colorValue % 16 === 15 ? "F" :
            'error'
          }
          
  hexArray.push(findFirstDigit(rToUse));
  hexArray.push(findSecondDigit(rToUse));
  hexArray.push(findFirstDigit(gToUse));
  hexArray.push(findSecondDigit(gToUse));
  hexArray.push(findFirstDigit(bToUse));
  hexArray.push(findSecondDigit(bToUse));
  
  return hexArray.join('')
}
