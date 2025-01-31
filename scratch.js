console.log("Hello")

var myVariable = 3


let friend = "fish"

friend = "hippo"

// real world scenario
//let points = 0

//points = 10

//points = 20

//points = 0

read = false

read = true

//<img src="">

// How the computer runs this line
// 1) start on the right hand side of the equal sign
// 2) simplify right hand side down to one value
// 3) go to the left hand side, make the variable
// 4) put the simplified value from the right hand side into the variable on the left hand side
var total = 7.99 + 1.25

var message = "Hello" + " there" // "Hello there"


var username = "Natalie"
var greeting = "Hello " + username // "Hello Natalie"

// Shorthands in Javascript
let points = 0

points += 10 // points = points + 10

points += 10

points += 10

// What will points be now? 30!

var fullName = "Natalie"
fullName += " Childs" // fullName = fullName + " Childs"

fullName // "Natalie Childs"

// Operations with Booleans (Boolean Logic)
let soundHappening = false
let muted = true

// real world example
let showMessage = soundHappening && muted
// let showMessage = false && !false
// let showMessage = false && true
// let showMessage = false

// let showMessage = true && !false
// let showMessage = true && true
// let showMessage = true
// then show the message "We can't hear you"

if(true) {
    // will run this code
}

if(false) {
    // will not run this code
}

if(soundHappening && muted) {
    console.log("We can't hear you!")
    // in a real app we'd add something to the HTML to show this message
}

let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// Milo
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true
// && || ! ()

// Bring those puzzle pieces together to make the logic
// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)

// you could put it in a bowl mix it there, then put it in the pan
let rafaelShouldGetMilo = pottyTrained && !sheds && (likesSnuggles || likesFetch)
if(rafaelShouldGetMilo) {
    console.log("Rafael should get Milo")
}

// Put it all in the pan and mix it there
if(pottyTrained && !sheds && (likesSnuggles || likesFetch)) {
    console.log("Rafael should get Milo")
}

// Penny
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

let rafaelShouldGetPenny = pottyTrained && !sheds && (likesSnuggles || likesFetch)

if(pottyTrained && !sheds && (likesSnuggles || likesFetch)) {
    console.log("Rafael should get Penny")
}


// Single equals =
// Puts something in a box (assigns)
// Statement
sheds = pottyTrained
// I am making sheds be whatever pottyTrained is

// Triple equals (or double equals) ===
// Asks if something is the same as something else
// Question
sheds === pottyTrained
// Are these the same? Get a true or a false answer
// Simplify to true or false


// Double equals (BAD NEVER USE IT)
// Does not check the data type
// Automatically convert them to be the same data type
// We can't trust auto-fix to do the right thing
"3" == 3 // true

// Triple equals
// Does not automatically convert to be the same data type
"3" === 3 // false


// Something important
// Data types matter in programming
// string "false" is NOT the same as boolean false
// string "3" is NOT the same as the number 3