//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
//1b) Call the `sum` function inside a `try` block using `"1"` and `"2"` as arguments. Use `console.log` within a `catch` block to inform the user of the error.


function sum(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ("Error! Numbers only!");         //check data types first and throw error
    } 
    return x + y;
    }    

    try {
        sum("1", "2")
    }    

    catch(err){
        console.log(err)        
    }

    finally {
        console.log("Run no matter what!")
    }


  
// 2a) Given a user object, write a function called `login` that takes a `username` and `password` as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying `"login successful!"`  

var user = {
    username: "sam", 
    password: "123abc"};

function login(username, password){
    if(username !== user.username || password !== user.password){   //check credentials
        throw Error ("Information doesn't match with our system!")   
    } else {
        console.log('login successfull!')
    }    
}
    try{
        login('sam', '123abc')
    } 
    
    catch(err){
        console.log(err)
    }


// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message! 
