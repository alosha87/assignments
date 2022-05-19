var newLi = document.createElement("li")
newLi.textContent = "3"
var myList = document.getElementById("my-list")
myList.append(newLi)

/**
 * Challenge:
 * 
 * Add a paragraph after the existing unordered list with any text you want inside.
 * Do this completely in JavaScript!
 */

var newP = document.createElement("p")
newP.textContent = "Keep going! You are doing GREAT!"
document.body.prepend(newP)
document.body.style.backgroundColor = "lightBlue"
newP.style.textAlign = "center"
newP.style.fontSize = "30px"
newP.style.textDecorationLine = "underline"
