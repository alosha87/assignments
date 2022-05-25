var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 1. Remove the last item from the vegetable array.
    var poppedLastVeggie = vegetables.pop(3);
    //console.log(poppedLastVeggie);
    //console.log(vegetables);
    // console.log("vegetables: ", vegetables);


// 2. Remove the first item from the fruit array.
    var shifttedFirstFruit = fruit.shift(0);
    //console.log(fruit);
    // console.log("fruit: ", fruit);


// 3. Find the index of "orange."
    var indexOrange = fruit.indexOf("orange");
    // console.log(indexOrange);


// 4. Add that number to the end of the fruit array.
    var endNumFruit = fruit + ', ' + indexOrange;
    // console.log(endNumFruit);


// 5. Use the length property to find the length of the vegetable array.
    var vegLength = vegetables.length;
        // console.log(vegLength);
    

// 6. Add that number to the end of the vegetable array.
    // console.log(vegetables + ', ' + vegLength);


// 7. Put the two arrays together into one array. Fruit first. Call the new 
// Array "food".
    var food = fruit.concat(indexOrange, vegetables, vegLength);
    //console.log(food);


// 8. Remove 2 elements from your new array starting at index 4 with one method.
        var removedFood = food.splice(4,2);
        // console.log(removedFood + " removed");
        // console.log(food);


// 9. Reverse your array.
    var revFood = food.reverse();
    // console.log(revFood);


// 10. Turn the array into a string and return it.
    let newArray = food.toString("")
    console.log(food)

// If you've done everything correctly, the last step should print the following string to the console:
//    3,pepper,1,watermelon,orange,apple
