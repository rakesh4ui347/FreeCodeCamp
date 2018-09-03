function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2)); // You have passed 3 arguments
  console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.


  ///******************* */
  const sum = (function() {
    "use strict";
    return function sum(...args) {
      
      return [...args].reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6