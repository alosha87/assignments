// Write a function that takes an array of numbers and returns the largest (without using Math.max())
// largest([3, 5, 2, 8, 1]) // => 8
// var numbers = [3, 5, 2, 8, 1];
// var largest = 0;

// for (i = 0; i <= largest; i++) {
//     if (numbers[i] > largest) {
//         var largest = numbers[i];
//     }
// }
//     console.log(largest);



// Write a function that takes an array of words and a character and returns each word that has that character present.    
// function lettersWithStrings(random,character) {
//         let foundMatches=[]
//           for (let i = 0; i < random.length; i++) {
//               if (random[i].includes(character) == true) {
//                  foundMatches.push(random[i])
//         }
//     }
//         return foundMatches
// }
//         console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") )



//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
// isDivisible(4, 2) // => true
// isDivisible(9, 3) // => true
// isDivisible(15, 4) // => false

function isDivisible(val1, val2) {
    if(val1 % val2 === 0){
        console.log(true)
    } else {
        console.log(false)
    }
}

isDivisible(4, 2)
isDivisible(9, 3)
isDivisible(15, 4)