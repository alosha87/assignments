//Mouse Over and Out Function
document.getElementById("demo").addEventListener("mouseover", mouseOver); 
    function mouseOver() {
        document.getElementById("demo").style.backgroundColor = "Blue";
    }

document.getElementById("demo").addEventListener("mouseout", mouseOut);
  function mouseOut() {
    document.getElementById("demo").style.backgroundColor = "White";
    }

// Mouse Held Down Function
document.getElementById("demo").addEventListener("mousedown", mouseDown);
  function mouseDown() {
      document.getElementById("demo").style.backgroundColor = "Red";
    }

// Mouse Button is Let Go
document.getElementById("demo").addEventListener("mouseup", mouseUp);
    function mouseUp() {
        document.getElementById("demo").style.backgroundColor = "Yellow";
    }

// Mouse is Double Clicked
document.getElementById("demo").addEventListener("dblclick", ondblclick);
    function ondblclick() {
        document.getElementById("demo").style.backgroundColor = "Green";
    }

// Mouse Scroll is used somewhere in the window
window.onwheel = function() {
        document.getElementById("demo").style.backgroundColor = "Orange";
    }