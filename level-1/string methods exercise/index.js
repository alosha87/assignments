// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
    // capilizeAndLowercase("HelLo") // => "HELLOhello"

        // var hello = "HelLo"
        // var upperCased = hello.toUpperCase();
        // var lowerCased = hello.toLowerCase();
        // var UpperLower = upperCased.concat(lowerCased);
        // console.log(UpperLower)


// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
    // Hint: You'll need to use Math.floor().
    // findMiddleIndex("Hello") // => 2
    // findMiddleIndex("Hello World") // => 5

        // function findMiddleIndex(Hello){
        // console.log(Math.floor("Hello".length / 2))
        // console.log(Math.floor("Hello World".length / 2))
        // }
                
        // findMiddleIndex("Hello")
        // findMiddleIndex("Hello World")


// Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)` and the other functions you've written to return the first half of the given string.
    // returnFirstHalf("Hello") // => "He"
    // returnFirstHalf("Hello World") // => "Hello"
    
    // var Hello = "Hello"
    // var HelWorld = "Hello World"
    // var firstHalf = Hello.slice(0, 2)
    // var secondHalf = HelWorld.slice(0, 5)
    // console.log(firstHalf)
    // console.log(secondHalf)
    

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
    // Hint: If your string length is odd, use Math.floor() to round down.
    // capilizeAndLowercase("Hello") // => "HEllo"
    // capilizeAndLowercase("Hello World") // => "HELLO world"
    // var hello = "Hello"
    // var world = "World"
    // var comb = hello.toUpperCase(He)
    // var first2 = hello.toUpperCase();
    // var first1 = world.toLowerCase();
    // console.log(comb)
    // console.log(first2  + ' ' + first1)


    
    // **Optional Code Challenge**              
    // > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
    
    // Write a function that takes a string as a parameter and capitalizes any character that follows a space.
    // capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"