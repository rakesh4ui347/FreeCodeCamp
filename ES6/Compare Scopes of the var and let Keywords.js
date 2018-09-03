var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

//********will execute like below */
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

// ***********//
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
/// question ///
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        
        i = "block scope";
        console.log("Block scope i is: ", i);
      }
       i = "function scope";
      console.log("Function scope i is: ", i);
      return i;
    }

    // "function scope"