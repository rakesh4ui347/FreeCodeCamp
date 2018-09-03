// To ensure your data doesn't change,
// JavaScript provides a function Object.freeze to prevent data mutation.
let obj = {
    name:"FreeCodeCamp",
    review:"Awesome"
  };
  Object.freeze(obj);
  obj.review = "bad"; //will be ignored. Mutation not allowed
  obj.newProp = "Test"; // will be ignored. Mutation not allowed
  console.log(obj); 
  // { name: "FreeCodeCamp", review:"Awesome"}

  ///////
  function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();