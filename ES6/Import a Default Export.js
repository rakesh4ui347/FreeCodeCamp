//In the following example, we have a function, add, that is the default export of a file, 
//"math_functions". Here is how to import it:

import add from "math_functions";
add(5,4); //Will return 9
//The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}. 
//Unlike exported values, the primary method of importing a default export is to simply write the value's name after import.

//****Question */
"use strict";
import subtract from "math_functions";
subtract(7,4);