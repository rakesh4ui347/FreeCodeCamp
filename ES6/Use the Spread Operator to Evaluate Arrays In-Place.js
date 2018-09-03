//the spread operator only works in-place, like in an argument to a function or in an array literal. 
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

//const spreaded = ...arr; // will throw a syntax error
///***************** */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
