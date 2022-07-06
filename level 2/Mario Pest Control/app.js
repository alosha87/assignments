const pests = document.pestControl //Get document from HTML

//Submit Event
pests.addEventListener("submit", function(e) {
    e.preventDefault() //To prevent auto-refresh

    const goomba = pests.goomba.value
    const bobOmbs = pests.bobomb.value
    const cheepCheeps = pests.cheepcheep.value
  
    const goombaPrice = goomba * 5
    const bobombPrice = bobOmbs * 7
    const cheepCheepPrice = cheepCheeps * 11

    const finalPrice = goombaPrice + bobombPrice + cheepCheepPrice

    console.log("You owe " + goombaPrice + " coins for Goombas, \n" +
        bobombPrice + " coins for Bob-ombs, and \n" + cheepCheepPrice +
        " coins for Cheep-cheeps." + "\n\nYour grand total is " + finalPrice + " coins.")

    document.getElementById("total").innerHTML = "You owe " + goombaPrice + " coins for Goombas, \n" +
        bobombPrice + " coins for Bob-ombs, and \n" + cheepCheepPrice +
        " coins for Cheep-cheeps." + "\n\nYour grand total is " + finalPrice + " coins."

})

// **Passing Criteria**

// Student demonstrated a solid understanding with the following levels of the skills tree:

// - Static Websites, Level 1
//     - CSS Selectors
//     - Colors in CSS
//     - Fonts in CSS
//     - Using external CSS stylesheets and JavaScript files
// - Deployment, Level 1
//     - Opening an HTML document in browser