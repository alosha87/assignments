// // MID-LEVEL ASSESSMENT
// const people1 = [ "John", "Adam", "Amber" ]


// function peopleElements(arr) {
//     const result = arr.map(function(tag){
//         // return "<h1>" +  people  + "</h1>"
//         return `<h1> ${tag} </h1>` //backticks
//     })
//     return result
// }

// console.log(peopleElements(people1))

// // ES6 PRACTICE
// //let and const
// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// // OUTPUT:
// // pet name:  fluffy
// // pet name:  spot
// // man name:  John



// //***************************************************************************** */
// //ES6 Arrow Functions
// //Task 1:  Re-write this `.map()` using an arrow function:
// //Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

// const carrots = ["bright orange", "ripe", "rotten"]

// // function mapVegetables(arr) {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }

// const mapVegetables = arr => {
//     return arr.map(function (carrot){
//         return { type: "carrot", name: carrot };
//     })
// }
// console.log(mapVegetables(carrots))

// // OUTPUT:
// // [
// //     { type: 'carrot', name: 'bright orange' },
// //     { type: 'carrot', name: 'ripe' },
// //     { type: 'carrot', name: 'rotten' }
// //   ]



// //***************************************************************************** */
// //Task 2: Re-write this .filter()'s callback function using an arrow function:

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// // function filterForFriendly(arr) {
// //     return arr.filter(function(person) {
// //         return person.friendly
// //     })
// // }

// const filterForFriendly = arr => {
//     return arr.filter(person => {
//         return person.friendly
//     })
// }
// console.log(filterForFriendly(people))

// // OUTPUT:
// // [
// //     { name: 'Luigi', friendly: true },
// //     { name: 'Mario', friendly: true }
// //   ]



// //***************************************************************************** */
// //  **Task 3: Re-write the following functions to be arrow functions:

// // function doMathSum(a, b) {
// //     return a + b
// // }

// // var produceProduct = function(a, b) {
// //     return a * b
// // }

// let doMathSum = (a, b) => a + b
// console.log(doMathSum(2, 4))

// let produceProduct = (a, b) => a * b
// console.log(produceProduct(2, 2))

// // OUTPUT:
// // 6
// // 4



// //***************************************************************************** */
// //Task 4: Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// //Hi Kat Stark, how does it feel to be 40?

// printString = (firstName, lastName, age) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)    
// printString("Alosha", "Potter", "35")

// // OUTPUT: 
// // Hi Alosha Potter, how does it feel to be 35?



// //***************************************************************************** */
// // **Extra Credit**
// // Use template literals to build the string

// // Task 5: Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 
//  const filterForDogs = animals.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  console.log(filterForDogs)
 
// //  OUTPUT:
// //  [ { type: 'dog', name: 'theodore' }, { type: 'dog', name: 'sparky' } ]



// //***************************************************************************** */
//REST OPERATOR
//collectAnimals = ("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// OUTPUT:
// [ 'dog', 'cat', 'mouse', 'jackolope', 'platypus' ]



// //***************************************************************************** */
//Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

function combineFruit(fruits, sweets, vegetables) {
        return {fruits, sweets, vegetables}
        }
        console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))

// OUTPUT:
// {
//     fruits: [ 'apple', 'pear' ],
//     sweets: [ 'cake', 'pie' ],
//     vegetables: [ 'carrot' ]
//   }



// //***************************************************************************** */
