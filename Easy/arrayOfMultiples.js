/*
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array.
*/



function arrayOfMultiples(num , length) {
  
  let arr=[];
  for (let index = 0; index < length; index++) {
    arr[index] = (index+1) * num;
  }
return arr;
}

exports.solution = arrayOfMultiples;
