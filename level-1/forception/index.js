var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

//Write a function that takes two arrays as parameters. The first array will be an array of people's names, and the second array will be the alphabet. Using a for loop within a for loop, create and return array that looks like this:


function forception(people,alphabet){
    var peoAlp =[];
    for (var names of people){
        peoAlp.push(names);
        for(letter of alphabet){
            peoAlp.push(letter);
        }
    }
    return peoAlp;
}
    console.log(forception(people,alphabet))