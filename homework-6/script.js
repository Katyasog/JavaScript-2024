"use strict"


function iterativeOddSumTo(number) {


if (number % 2==1) number ++;
return number * number /4;
}
    console.log(iterativeOddSumTo(1)) // 1
    console.log(iterativeOddSumTo(9)) // 25
    console.log(iterativeOddSumTo(10)) // 25

  2.

  function recursiveOddSumTo(n) {
   if (n <= 1)
   return 1;
   else
   if (n % 2 == 0)
   n--;

return n + recursiveOddSumTo(n - 2);
}

    
    console.log(recursiveOddSumTo(1)) // 1
    console.log(recursiveOddSumTo(9)) // 25
    console.log(recursiveOddSumTo(10)) // 25 