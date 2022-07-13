const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

// .forEach
const newArr = []

arr.forEach(num => num % 2 === 0 && newArr.push(num)) //short way

        //arr.forEach(function(num){
        //     if(num % 2 === 0){
        //         newArr.push(num)
        //     }
        // })

        console.log(newArr)


// .find()
    const result = users.find(function(user){
        if(user.name === "julie"){
            return user
        }
    })
    console.log(result)


// .findIndex()
    const result2 = users.findIndex(function(user){
        if(user.name === "rick"){
            return true
        }
    })
    console.log(result2)

