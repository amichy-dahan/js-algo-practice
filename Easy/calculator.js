/*
Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.

Examples
calculator(2, "+", 2) ➞ 4

calculator(2, "*", 2) ➞ 4

calculator(4, "/", 2) ➞ 2
Notes
If the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator( num1 , mathematical , num2) {
  const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};
  //your code
 let res;
  if(num1 == 0 || num2 ==0 ){
         if(mathematical == "/"){
          return "Can't divide by 0!"
         }else{
              res = operations[mathematical](num1,num2)
         }

  }else{
    res = operations[mathematical](num1,num2)
  }

 return res

}

exports.solution = calculator;