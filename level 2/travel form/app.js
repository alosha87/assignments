//You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

//Get all the forms from the HTML
const form = document.travelForm //Get the document from the HTML

//Submit Event
form.addEventListener("submit", (event) => {
        event.preventDefault() //To prevent auto-refresh


// You should collect the following information from the user:
// - First name (text input)
// - Last name (text input)
// - Age (number input)

    const name = form.firstName.value
    const last = form.lastName.value
    const age = form.age.value       
    const gender = form.gender.value
    const city = form.city.value
    form.firstName.value = "" //To clear the value after submit
    form.lastName.value = ""  //To clear the value after submit
    form.age.value = ""       //To clear the value after submit
    form.gender.value = ""
    form.city.value = ""

    console.log(city)

    //console.log(name + " " + last + '\n' + age)


// - Gender (radio buttons with 2 or more options)
    //Radio - Gender
    // console.log(form.gender.value) //to check radio results
    // alert(form.gender.value)

// - Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
    //Select Box - Diet
    // console.log(form.city.value) 
    // alert(form.city.value)


// - Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
    //Checkbox - Diet
    const diet = [] //assign a variable for checkboxes
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) { //to get checked objects results
            diet.push(form.diet[i].value)
        }
    }
    // console.log(form.gender.value + '\n' + cities)
    // alert(form.gender.value + '\n' + diet)

    alert("Passenger: " + name + " " + last + '\n' + "Age: " + age + '\n' + "Gender: " + gender + '\n' + "Flying to: " + city + '\n' + "Diet Restriction: " + diet)
})

 
// Each element of the form should be given a `name` attribute so you can access the data in JavaScript and do stuff with it.

// There should also be a button at the end of the form to submit it. Upon pressing the button, an alert should pop up that looks like this:

