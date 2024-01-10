var something = 3
var somethingElse = "hello"

console.log("somethingElse is set to " + somethingElse)

var definitelynotthree = 3

var result = definitelynotthree + 5

// get input from a user (for now prompt, eventually we're going to hook up to a form)
// do something with that input
// show something to the user (for now console.log, alert, eventually we're going to put stuff in the HTML)


// var is old
// let is the modern way
// essentially the same (technical difference but nobody cares)

// var/let makes a NEW box
let something2 = "I'm in a box"

// no var/let reassigns what is in the varialbe
// dumps out the old value and puts in a new value
something2 = "I'm an apple"

something2 += " that's great"
// these are the same
something2 = something2 + " that's great"



// Restaurant ordering app

// pretend we get this from user
let entree = "tacos"
let side = null // easy clear way to say that they did not pick anything for the side (a way to say nothing)
let customerName = "Shawn"
let isToGo = false // setting it to false is a way to say this is "for here" or "not to go"
let isFastDashMember = true 


// null is an intentional nothing
// undefined is a "just left it as nothing"
// essentially they're just both nothing

let myVariable
// myVariable will be set to undefined

let giveSpecialCoupon = isFastDashMember && isToGo

// make their order
let order = entree + " " + isToGo + " for " + customerName

// what the computer's going to do in its head
//let order = "tacos false for Shawn"

// show it to the user
console.log(order)


// semicolons are completely optional in JavaScript


var friend = "fish"
friend = "hippo"

friend = friend + "fish"




var x = 35
var y = "20"
var z = x + y
console.log(z)

// console.logging a string will not have quotation marks around
// type in the name of the variable and hit enter to see the exact value of the variable
console.log("3520")
console.log(3520)


console.log("Step 4:  Is it Hot Outside?");
var isItHotOutside = true;