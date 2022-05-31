// ES6 Part 1


// const and let
// *** const` is used to declare variables that will **never** be re-assigned. ***
// *** let` is used to declare variables where the value could change at some point. ***

// var name = "steve"

// const firstName = "joe"
// // firstName = "steve"
// let age = 12
// age = 13

// Global, Local, Bracket
// function someFunc(){
//     let a
//    if(2 === 2){
//        a = "hello"
//    }
//    console.log(a)
// }

//someFunc()

// spread and rest (gather)
    //Syntax: ...
    // function maxNumber(...nums){
    //     console.log(nums)
    // }

    // maxNumber(0, 3, 58, 20, 200, 30)

    // objects and arrays
    // const colors1 = ["red", "blue"]
    // const colors2 = ["yellow", "green"]

    // const allColors = [...colors1, ...colors2]

    // console.log(allColors)

    // const person = {
    //     name: "rick",
    //     age: 50
    // }

    //     const personCopy = {...person}
    //     console.log(personCopy)

// template literals
// const name = "joe"
// // "hi " + name
// const greeting = `hi ${name}`
// console.log(greeting)

// import & export
require()
module.exports