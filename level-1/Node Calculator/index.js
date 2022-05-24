// console program for a node calculator
const readlineSync = require('readline-sync');
let result;

//prompt user to type first number
const num1 = readlineSync.question("Please enter your first number: ");

// prompt user to type the operator
const operator = readlineSync.question("Please enter the operation to perform (+, -, *, /): ");

//prompt user to type second number
const num2 = readlineSync.question("Please enter your second number: ");

// Switch statement to evaluate an expression
switch(operator) {
    case '+':
        result = parseInt(num1) + parseInt(num2)
        console.log(`${num1} + ${num2} = ${result}`);
        // console.log(num1 + " + " + num2 + " = " + result)
        break;
    case '-':
        result = parseInt(num1) - parseInt(num2)
        console.log(`${num1} - ${num2} = ${result}`);
        break;
    case '*':
        result = parseInt(num1) * parseInt(num2)
        console.log(`${num1} * ${num2} = ${result}`);
        break;
    case '/':
        result = parseInt(num1) / parseInt(num2);
        console.log(`${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log('Invalid operator');
        break;
}