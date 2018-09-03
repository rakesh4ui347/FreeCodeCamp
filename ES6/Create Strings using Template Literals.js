const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  // Template literal with multi-line and string interpolation
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting); // prints
  // Hello, my name is Zodiac Hasbro!
  // I am 56 years old.
  //Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string.

//Secondly, notice that the string is multi-line, both in the code and the output. 
//This saves inserting within strings.
//The ${variable} syntax used above is a placeholder. 
//Basically, you won't have to use concatenation with the + operator anymore. 
//To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }. 
//Similarly, you can include other expressions in your string literal, for example ${a + b}.

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";
  
    // change code below this line
    const resultDisplayArray = arr.map((a,i) => {
       return `<li class="text-warning">${a}</li>`
    });
    // change code above this line
  
    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`, 
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);