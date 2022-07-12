//1) Make an array of numbers that are doubles of the first array

//This is hard passed. It will work only on the created variable 

// const arr = [2, 5, 100]
// const doubleNumbers = arr.map(function(num){
//   return num * 2 
//   }) 
//   console.log(doubleNumbers); // [4, 10, 200]

// --------------------------------------------------------------------  

//This way wil pass every single array I console log!!!===>This is the right way!!!<===
  function doubleNumbers(arr){
    const newNum = arr.map(num => {
        return num * 2
    })
        return newNum
  }
  
  console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
  console.log(doubleNumbers([5, 10, 500])); // [10, 20, 1000]
  console.log(doubleNumbers([10, 15, 1000])); // [20, 30, 2000]

// --------------------------------------------------------------------

//2) Take an array of numbers and make them strings
  function stringItUp(arr){
    const strings = arr.map(num => {
        return String(num);
    });
    return strings
  }
  
  console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
  console.log(stringItUp([9, 4, 600])); // ["2", "5", "100"]

// --------------------------------------------------------------------

//  3) Capitalize the first letter of each name and make the rest of the characters lowercase

function capitalizeNames(arr){
    const newNames = arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    })
    return newNames
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
  
//   Output:
//   ["John", "Jacob", "Jingleheimer", "Schmidt"]

 // --------------------------------------------------------------------

 //  4) Make an array of strings of the names

 function namesOnly(arr){
    const listOfNames = arr.map(str => {
        return str.name
    })
    return listOfNames
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
//   ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  
   // --------------------------------------------------------------------

   //   5) Make an array of strings of the names saying whether or not they can go to The Matrix

   function makeStrings(arr){
    const person = arr.map(older => {
        return older.age >= 18 ? older.name + ' can go to The Matrix' : older.name + ' is under age!!'
    })
    return person
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
  



// --------------------------------------------------------------------

// 6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
    const result = arr.map(info => {
        return "<h1>" + info.name + "<h1>" + "<h2>" + info.age + "</h2>";
    })
        return result
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
