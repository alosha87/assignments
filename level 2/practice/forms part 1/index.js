const form = document["my-form"] //to grab the document from HTML(short way)

//Submit Event
form.addEventListener("submit", function(event){
    event.preventDefault()      //to stop refereshing the page by itself

    //alert("It's working!")   //use alert to make sure it's working

    const firstName = form.firstName.value
    const lastName = form.lastName.value

    form.firstName.value = "" //to clear-out the value
    form.lastName.value = ""

    // 1. <h1></h1>
    const h1 = document.createElement('h1')

    // 2. <h1>Harry Potter</h1>
    h1.textContent = firstName + " " + lastName
    
    // 3. Append
    document.getElementsByTagName("body")[0].append(h1)

})


