// 1. Write a method or function that removes 
//all instances of the letter <strong>s</strong> in a 
//string. The method or function should accept a 
//string as an argument and return the same string with every 
//instance of the letter <strong>s</strong> removed.

//Overall Goal
//Create a string that has an s in it.
// Create a method or fuction that takes in the string, and removes s.
// The argument is the s, and the paramater is the string.

// research functions to replace s with nothing.

var comment = ("hey sweetie, you got this")
// creating the string variable
function removeS(comment) {
    //this function we created is named and will act on the string.

    return comment.replaceAll('s', '')
    //the return of the function should relace s with nothing.

} 

console.log(removeS(comment))
// print the string with the function in place. 