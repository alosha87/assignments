// Higher Order Functions
// A callback is a function passed into another function
function doMath(num1, num2, callback){
    return callback(num1, num2)
}

function sum(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 - num2
}

function mul(num1, num2, callback){
    return num1 * num2
}

function div(num1, num2, callback){
    return num1 / num2
}


console.log(doMath(10, 5, div))
alert(doMath(10, 5, div))