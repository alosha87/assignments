// .filter()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const result = arr.filter(function(num){
//     if(num % 2 === 0){  // % = if the num can is divided by 2 is zero, return result
//         return true 
//     }
// })
   
//const result = arr.filter(num => num % 2 === 0)

//const result = arr.filter(x => x % 2 === 0 ? 'x' : '')

//console.log(result)



const movies = [
    { name: "movie1", genre: "horror" },
    { name: "movie2", genre: "action" },
    { name: "movie3", genre: "action" },
    { name: "movie4", genre: "fantasy" }
    ]

const actionMovies = movies.filter(movies => movies.genre === 'action')
        
// const actionMovies = movies.filter(function(movie){
//     if(movie.genre === "action"){
//         return true
//     }
// })
        console.log(actionMovies)

//     const result2 = movies.filter(x => x.genre === 'action')
    //console.log(result2)