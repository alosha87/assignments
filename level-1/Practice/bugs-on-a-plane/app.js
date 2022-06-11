const form = document.getElementById("airline-form");

function formAlert() {
    let firstName = form['firstName'].value;
    let lastName = form['lastName'].value;
    // console.log(firstName + " " + lastName) 
    let age = form['age'].value;
    var gender = form['gender'];
    if (gender[0].checked){
        var gender = "Male"
    }
    if (gender[1].checked){
        var gender = "Female"
    }
    if (gender[2].checked){
        var gender = "Meh..."
    }
    // console.log(gender)

    let location = form['travel-location'].value;
    if (location[0].checked)
        location.push(document.getElementById(location[0]).value)
    // console.log(travel-location[0])

    let diet = [];
    if (form['vegan'].checked) {
        diet.push(document.getElementById('vegan').value);
    }
    if (form['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident...");

    // alert(`
    //     First Name: ${firstName}
    //     Last Name: ${lastName}
    //     Age: ${age}
    //     Travel Location: ${location}
    //     Diet: ${diet}
    //     Awesome, now if you die, it won't be an accident...`)
    
}   

document.querySelector("#airline-form").addEventListener("submit", function(e){
    e.preventDefault()
    // console.log('submitting')
    formAlert()
    
  	//do whatever an submit the form
})
   

