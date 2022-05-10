/**
 * CHALLENGE:
 * 
 * Play around with all the different DOM methods for selecting and modifying elements.
 * 
 * Make sure to read through the `notes.md` file for a recap and some new information regarding using the DOM API
 */

// Getting Elements by ID and Class Name

// var header = document.getElementById("header1")
// console.log(header)

// var items = document.getElementsByClassName("list-items")
// // console.log(items)

// for (var i = 0; i < items.length; i++){
//     console.log(items[i].innerHTML)
// }

// ----------------------------------------

// Query Selector and Query Selector All

// var header = document.querySelector("#header2")
// console.log(header)

var navBar = document.querySelectorAll("ul#navbar > li")
console.log(Array.from(navBar))

for (var i = 0; i< navBar.length; i++) {
    console.log(navBar[i])
}