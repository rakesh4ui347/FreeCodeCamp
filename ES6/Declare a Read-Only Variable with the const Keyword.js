function printManyTimes(str) {
    "use strict";
  
    // change code below this line
  
    var sentence = str + " is cool!";
    for(var i = 0; i < str.length; i+=2) {
      console.log(sentence);
    }
  
    // change code above this line
  
  }
  printManyTimes("freeCodeCamp");

  //6 freeCodeCamp is cool!

  ///**** */
  function printManyTimes(str) {
    "use strict";
  
    // change code below this line
  
    const SENTENCE = str + " is cool!";
    for(let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE );
    }
  
    // change code above this line
  
  }
  printManyTimes("freeCodeCamp");
  //6 freeCodeCamp is cool!