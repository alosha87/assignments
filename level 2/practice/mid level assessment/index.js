const people = [ "John", "Adam", "Amber" ]


function peopleElements(arr) {
    const result = arr.map(function(tag){
        // return "<h1>" +  people  + "</h1>"
        return `<h1> ${tag} </h1>` //backticks
    })
    return result
}

console.log(peopleElements(people))

//Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]






