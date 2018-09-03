// ES5 code:

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

//ES6 destructuring syntax:

const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54

///If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that freedom as well.

const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54

function getLength(str) {
    "use strict";
  
    // change code below this line
    //const length = 0; // change this
    const {length:len} = str; 
    // change code above this line
  
    return len; // you must assign length to len in line
  
  }
  
  console.log(getLength('FreeCodeCamp'))