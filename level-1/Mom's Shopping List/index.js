// Select the form
const form = document["grocery-list"]
 
// Stop Refreshing - do this always first
form.addEventListener("submit", (event) => {
    event.preventDefault();

// Adding new items on DOM
    const toBuy = form.toBuy.value;
    form.toBuy.value = ""

    const ul = document.createElement('ul');
    ul.textContent = toBuy + " "
    document.getElementsByTagName("li")[0].appendChild(ul)
    
// Create buttons 
    const editButton = document.createElement("button");
    editButton.innerHTML = "edit"; 
    document.getElementsByTagName("li")[0].appendChild(editButton)

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    document.getElementsByTagName("li")[0].appendChild(deleteButton)

// Delete item when click button
    deleteButton.addEventListener("click", removeListItem); 
        function removeListItem(event) {
            // console.log(event.target.parentElement) => to verify the element to be call
            event.target.parentElement.remove("li");
        }    
})