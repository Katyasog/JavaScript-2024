"use strict";


//const addThemAll= (...args) => args.reduce((a, b) => a + b);
   


function addThemAll(){
    var total =  0;
    for(let i=0; i<arguments.length; i++){
       total += arguments[i];
    }
    return total;
  }
     
     console.log(addThemAll(2,4)); // 6
     console.log(addThemAll(1,2,3,4)); // 10
     console.log(addThemAll(5,5,10)); // 20

2.

function multiply(a) {
    return function (b) {
        return a * b;
      };
    }

console.log(multiply(5)(5))		// 25
console.log(multiply(2)(-2))	        // -4
console.log(multiply(4)(3))		// 12

