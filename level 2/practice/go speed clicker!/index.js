// For this assignment, reference the last two articles. 
// Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. 
// Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.

function clickCounter() { //get the document from the html
    //store the click on local storage
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) { 
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      //display results on the screen 
      document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s)."; 
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }

// **Extra credit:** Put a countdown timer (10-30 seconds) on the page that stops the user's clicks from counting towards the total after the timer ends.