//Objects can have a special type of property, called a method.
//Methods are properties that are functions. 
let duck = {
    name: "Aflac",
    numLegs: 2,
    sayName: function() {return "The name of this duck is " + duck.name + ".";}
  };
  duck.sayName();
  // Returns "The name of this duck is Aflac."

  /********* */
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs:function(){
      return "This dog has "+ dog.numLegs +" legs."
    }
  };
  
  dog.sayLegs();
