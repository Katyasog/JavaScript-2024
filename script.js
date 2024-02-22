"use strict"


function iterativeOddSumTo(number) {

   let sum = 0;
   for (let i = 1; i <= number; i++) {
  
   
 
    sum += i;
   }
   
  return sum;
}

    
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(9)) // 25
    console.log(iterativeOddSumTo(10)) // 25

  2.

  function recursiveOddSumTo(number) {

    if (number == 1) return 1;
    return number + recursiveOddSumTo(number-1);
    
    };
    
    console.log(recursiveOddSumTo(1)) // 1
    console.log(recursiveOddSumTo(9)) // 25
    console.log(recursiveOddSumTo(10)) // 25
    
