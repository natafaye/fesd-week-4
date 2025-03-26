var friend = "fish"
friend = "hippo"

var dishName = "Pho"
var isTasty = true
var price = 7.99
// If it has quotation marks around ' " that is a string now
// These are strings: "7.99" "false" "true" "isTasty"

// If it doesn't have quotation marks and it's letters 
// it's going to look for a variable called that (if it's not a keyword/magic word)

var fee = 1.25
var total = 7.99 + fee

console.log(total)

total += 5.99 // total = total + 5.99

console.log(total)

// make the variables
let dogName
let likesFetch
let sheds
let pottyTrained
let likesSnuggles

// set them to the Milo data
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true
// dogName likesFetch sheds pottyTrained likesSnuggles
// && || ! ()

// check if Rafael should adopt Milo
// true if Rafael would like Milo and false if he would not
// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)
let shouldAdoptMilo = pottyTrained && !sheds && (likesSnuggles || likesFetch)
//  false
console.log("Should I get Milo?", shouldAdoptMilo)

// set them to the Penny data
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

// check if Rafael should adopt Penny
let shouldAdoptPenny = pottyTrained && !sheds && (likesSnuggles || likesFetch)
console.log("Should I get Penny?", shouldAdoptPenny)



// Single equals =
// Command
// myName = "Natalie"
// Hey you! Your name is Natalie now.
// Triple equals ===
// Question
// myName === "Natalie"
// Is your name Natalie? true/false answer

// BAD WRONG: Double equals ==
// swear word, don't use it unless you like crying
// the awkward autocorrect of operators


// Fork in the road
// do this or don't do this
//if (SOMETHING THAT COMES OUT TO A BOOLEAN) {
    // code that you may or may not want to do
//}

let age = 40
let country = "USA"
let money = 1

if ((age >= 21 || country === "Germany") && money >= 4.99) {
    console.log("Here's a beer")
}