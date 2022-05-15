// Alternate Messages
var first = document.getElementById("txtOne")
    first.textContent = "Hi! How are you?";

var second = document.getElementById("txtTwo")
    second.textContent = "I'm doing great! What about you?";

var third = document.getElementById("txtThree")
    third.textContent = "Awesome!";

var fourth = document.getElementById("txtFour")
    fourth.textContent = "Keep the good work!";

// Clear Messages
var clear = document.getElementById("clear-button")
    clear.addEventListener("click", clearMessages);
function clearMessages() {
  document.getElementById("allMessages").textContent = ""
}