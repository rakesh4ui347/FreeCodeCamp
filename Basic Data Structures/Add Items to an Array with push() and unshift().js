/***Both methods take one or more elements as parameters and 
 * //add those elements to the array the method is being called on; 
 * //the push() method adds elements to the end of an array, 
 * //and unshift() adds elements to the beginning. Consider the following:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII'] *//

function mixedNumbers(arr) {
    // change code below this line
     arr.unshift("I", 2, "three");
     arr.push(7, "VIII",9);
    // change code above this line
    return arr;
  }
  
  // do not change code below this line
  console.log(mixedNumbers(['IV', 5, 'six']));
