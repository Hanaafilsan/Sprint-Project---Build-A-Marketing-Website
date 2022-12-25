// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/

let num1=prompt("enter number1")
let num2=prompt("enter number2")
let num3=prompt("enter your opration")

let result="" ; 

if(num3=="+"){
    console.log(result=num1+num2)
}
else if (num3 == "-") {
    console.log(result = num1 - num2)
}
else if (num3 == "*") {
    console.log(result = num1 * num2)
}
else if (num3 == "/") {
    console.log(result = num1 / num2)
}
else {
    console.log("sorry madooranin wax opporator")
}