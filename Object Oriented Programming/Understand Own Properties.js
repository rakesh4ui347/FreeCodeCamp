function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let duck = new Bird("Donald");
  let canary = new Bird("Tweety");

  /*
  name and numLegs are called own properties, 
  because they are defined directly on the instance object. 
  That means that duck and canary each has its own separate copy of these properties.

In fact every instance of Bird will have its own copy of these properties.

The following code adds all of the own properties of duck to the array ownProps:

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ] */

/********* */
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
  }
