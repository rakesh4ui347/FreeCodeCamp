//Here is a quick example of export default:

export default function add(x,y) {
    return x + y;
  }
  //Note: Since export default is used to declare a fallback value for a module or file,
   //you can only have one value be a default export in each module or file. Additionally, 
   //you cannot use export default with var, let, or const
   
   "use strict";
   export default function subtract(x,y) {return x - y;}   