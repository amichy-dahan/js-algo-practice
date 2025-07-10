/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition( arr ) {

let zero = arr.filter(i => i== 0)
if(zero.length >1){
  return true;
}else{
 
}
let res = 1
for (const element of arr) {
  res*= element;
}
let a = 0;
for (const element of arr) {
  if(res/element == element){
    a =element;
  }
}
if(a !=0){
  return true
}else{
  return false
}

}




exports.solution = canPartition;