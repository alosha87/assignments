
// var loopOlympics = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// Preliminaries
// 1. Write a for loop that prints to the console the numbers 0 through 9.

    // var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // for (var i = 0; i <= 9; i++) {
    //     console.log(num[i])
    // }


// 2. Write a for loop that prints to the console 9 through 0.
//     for (var i = loopOlympics.length -1; i >= 0; i--) {
//     for (var j = loopOlympics.length -1; j >= 0; j--) {
    
//     console.log(loopOlympics[i][j])
//     }
// }


// 3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`
    // const fruit = ["banana", "orange", "apple", "kiwi"]

    // for(i = 0; i < fruit.length; i++) {
    //     console.log(fruit[i])
    // }

//__________________________________________________________________________
// Bronze Medal
//1. Write a for loop that will push the numbers 0 through 9 to an array.
    // var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // for (var i = 0; i <= 9; i++) {
    //     console.log(num[i])
    // }


//2. Write a for loop that prints to the console only even numbers 0 through 100.
//     var evenNum = []
//     for (i = 0; i <= 100; i++) {
//     if ([i] % 2 === 0) {   //for even numbers
//         console.log(i)
//     }
// }


//3. Write a for loop that will push every other fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]` 
    const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

    var arr = []
    for (i = 0; i < fruit.length; i += 2) {
    arr.push(fruit[i])
    }
    console.log(arr)
//    to push every other fruit in an array
