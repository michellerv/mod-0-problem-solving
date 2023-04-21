//1. Given an array of strings, 
//print only the strings that have exactly 4 characters.

//Overall goal
//create array with strings that have at least a few with exactly four letters
//print the strings with exactly 4 characters
//data is an array of strings
//nothing unclear

//Pseudocode
//create a array fo strings, some with 4 characters, some with more or less. 
// create a for statment that goes through the array 
// the strings that have exactly 4 letters should be printed.
// going to research for statement syntax again
// create an if statement to only print strings with 4 characters
// console.log to print

// final solution

var words = ["like", "happy", "cats", "loopy"]

for (var i = 0; i < words.length; i++) {
    if (words[i].length === 4) {

    console.log((words[i]))
    }
}
