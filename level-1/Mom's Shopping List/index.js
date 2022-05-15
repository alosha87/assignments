const form = document["addItem"]

document.addItem.addEventListener("submit", function(event) {
    event.preventDefault()
   
    const item = form.toBuy.value
    
    newItem = createNewItem()
    document.getElementById("list").appendChild(newItem)
    form.toBuy.value = ""
})

function createNewItem() {

    

}

