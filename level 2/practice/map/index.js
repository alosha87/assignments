// Higher order array methods
// .map()

// 1. Array of Numbers

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const result = arr.map(function(num){  // arr[i]
//     return num + 10
// })

// const result = arr.map(num => num + 10)

//(8) [11, 12, 13, 14, 15, 16, 17, 18]


// 2. Array of data

const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

const result = users.map(function(user){
    return user.name
})

// const result = users.map(user => user.name)

console.log(result)