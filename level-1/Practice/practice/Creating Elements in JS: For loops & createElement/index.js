var powerRangers = [
    // "Jason Lee Scott", 
    // "Kimberly Hart", 
    // "Zack Taylor", 
    // "Trini Kwan", 
    // "Billy Cranston"

    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]
var rangersList = document.getElementById ("rangers")


for (var i = 0; i < powerRangers.length; i++){
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)

    // rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"
}

console.log("I'm Powerful!")
