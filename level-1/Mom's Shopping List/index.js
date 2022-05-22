// // Select the form
// const form = document["grocery-list"]
 
// // Stop Refreshing - do this always first
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

// // Adding new items on DOM
//     const productName = document.getElementById("title");
//     const grocery = productName.value
//     //const productName =title.value;
//     form.title.value = ""

//     grocery.textContent = event

//     const ul = document.createElement('ul');
//     ul.textContent = grocery + " "
//     document.getElementsByTagName("li")[0].appendChild(ul)
    
// // Create buttons 
//     const editButton = document.createElement("button");
//     editButton.innerHTML = "edit"; 
//     document.getElementsByTagName("li")[0].appendChild(editButton)

//     const deleteButton = document.createElement("button");
//     deleteButton.innerHTML = "delete";
//     document.getElementsByTagName("li")[0].appendChild(deleteButton)

// // Delete item when click button
//     deleteButton.addEventListener("click", function(event){
//         event.preventDefault();
//         console.log(grocery.remove)
//         removeListItem()
//     }) 
        
//     function removeListItem(event) {
//         // console.log(event.target.parentElement) => to verify the element to be call
//         // event.target.parentElement.remove("li");
//         grocery.remove()
//     }     
// })

// _________________________________________________________________________

//JS
// Select the form
const form = document["grocery-list"]
const list = document.getElementById("list")
// Stop Refreshing - do this always first
form.addEventListener("submit", (event) => {
    event.preventDefault();
// Adding new items on DOM
    const productName = document.getElementById("title");
    const grocery = productName.value
    //const productName =title.value;
    form.title.value = ""
    //grocery.textContent = event
    /** do this instead
     *
     *
     * <li>
     *   <p>ITEM</p>
     *  <button>Edit</button>
     *  <button>Delete</button>
     * </li>
     */
    // create a new list item container
    const newItem = document.createElement("li")
    // create new p tag to hold item
    const p = document.createElement("p")
    p.textContent = grocery
    /****/
    //const ul = document.createElement('ul');
    //ul.textContent = grocery + " "
    //document.getElementsByTagName("li")[0].appendChild(ul)
// Create buttons
    const editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    //document.getElementsByTagName("li")[0].appendChild(editButton)
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    //document.getElementsByTagName("li")[0].appendChild(deleteButton)
    // append everything to the listITem
    newItem.append(p, editButton, deleteButton)
    // append new item to the list so it appears in the dom inside of the UL element
    list.append(newItem)
// Delete item when click button
    deleteButton.addEventListener("click", function(event){
        console.log(grocery.remove)
        removeListItem()
    })
    function removeListItem(event) {
        // console.log(event.target.parentElement) => to verify the element to be call
        //document.getElementsByTagName("li")[0].remove()
        console.log(document.getElementsByTagName("li")[0])
        //event.target.parentElement.remove("li");
        newItem.remove()
    }
})
