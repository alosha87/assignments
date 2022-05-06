// innerHTML vs textContent
var myList = document.getElementById("my-list")
myList.innerHTML += "<li>3</li>"



document.body.innerHTML += "<p id = 'paragraph'> I am learning a lot! </p>"
document.getElementById("paragraph").style.textAlign = "center"

document.getElementById("paragraph").style.fontSize = "30px"
document.body.style.backgroundColor = "lightBlue"