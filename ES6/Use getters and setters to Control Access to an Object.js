/* You can obtain values from an object, and set a value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) 
//the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's 
//private variable based on the value passed into the setter function. This change could involve calculations, 
or even overwriting the previous value completely.*/
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer(){
      return this._author;
    }
    // setter
    set writer(updatedAuthor){
      this._author = updatedAuthor;
    }
  }
  const lol = new Book('anonymous');
  console.log(lol.writer);  // anonymous
  lol.writer = 'wut';
  console.log(lol.writer);  // wut
  //Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.

//Getters and setters are important, because they hide internal implementation details.

function makeClass() {
    "use strict";
    /* Alter code below this line */
  class Thermostat{
    constructor(Fahrenheit){
      
      this.Fahrenheit= Fahrenheit;
    }
    // getter
     get temperature(){
       return this.Fahrenheit
     }
     //setter
     set temperature(tempc){
       this.Fahrenheit=tempc;
     }
  
  }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C

  ///******************** */

  function makeClass(){
      "use strict";
      class Thermostat{
          constructor(temperature){
              this.temperature= temperature;
          }
          get temperature(){
              return (this.temperature - 32.0) * 5.0/9.0;
          }
          set temperature(updatedTemp){
              this.temperature=((updatedTemp * 9.0) / 5.0)+ 32.0;
          }
      }
      return Thermostat;
  }
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);