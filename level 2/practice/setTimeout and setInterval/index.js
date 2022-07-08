//setTimeout(function(){});

// setTimeout(arg1, arg2)

//setTimeout(function(){}, 1000)

// setTimeout(function(){
//     console.log('hello!');
//     alert('hello!')
//  }, 1000);
 
 // 1 second later
// 'hello!'

// var intervalID = setInterval(function(){
//     console.log('hello');
//     alert('hello!')
//  }, 1000)
 
//  // 1 second
// //  'hello!'
//  // 2 seconds
// //  'hello!'

// clearInterval(intervalID) //to clear the interval

// function sayHello(){
//     console.log("Hello");
// }

// var intervalID = setInterval(sayHello, 1000);

function sayHello(){
    console.log('hello!');
 }
 
 
 function stopSayingHello(){
    clearInterval(intervalID)
 }
 
 
 var intervalID = setInterval(sayHello, 1000);
 
 setTimeout(stopSayingHello,  6000)
