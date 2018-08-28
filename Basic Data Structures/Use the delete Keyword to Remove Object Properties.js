/**
 In earlier challenges, we have both added to and modified an object's key-value pairs. 
 Here we will see how we can remove a key-value pair from an object.

Let's revisit our foods object example one last time. If we wanted to remove the apples key,
 we can remove it by using the delete keyword like this:

delete foods.apples;
 */
/****
 vUse the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
 */
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  // change code below this line
  delete foods.oranges;
  delete foods.plums;
  delete foods.strawberries;
  // change code above this line
  
  console.log(foods);
