
//Overall goal
//Create an array
//Print every travel destination in alphabetical order
//Print should interpolate phrase "The next place I want to visit is:"



//create an array of destinations
var destinations = ["New York", "Miami", "Austin", "Denver"] 
//create a for statement to loop the elements of the array
for ( var i = 0; i < destinations.length; i++ ) {
    
// print the interpolation phrase, as well as the .sort()
//function, which will put the deastinatiions in alphabetical order
//put i after sort to call on each index of the array, so that all destinations
//are called. 
console.log(`The next place I want to visit is ${destinations.sort()[i]}`)
}


