/***objects are just collections of key-value pairs, or 
 * in other words, pieces of data mapped to unique identifiers that we call properties or keys.
 *  Let's take a look at a very simple example:
*/
let FCC_User = {
  username: 'awesome_coder',
  followers: 572,
  points: 1741,
  completedProjects: 15
}; 
let userData = FCC_User.followers;
// userData equals 572
let userData = FCC_User['followers']
// userData equals 572
/***Notice that with bracket notation, we enclosed followers in quotes. 
 * This is because the brackets actually allow us to pass a variable in to be evaluated
 *  as a property name (hint: keep this in mind for later!).
 *  Had we passed followers in without the quotes, 
 * the JavaScript engine would have attempted to evaluate it as a variable, and a ReferenceError:
 *  followers is not defined would have been thrown. */
/**************
 Using the same syntax, we can also add new key-value pairs to objects. 
 We've created a foods object with three entries. Add three more entries: 
 bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27
 */
let food ={
    apples: 25,
    oranges: 32,
    plums: 28
};
// change code below this line
foods.bananas=13,
foods.grapes=35,
foods.strawberries=27
// change code above this line

console.log(foods);
