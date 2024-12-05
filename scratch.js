var something = 3


let somethingElse = 2
console.log(somethingElse)

// one line of code
console.log(somethingElse)

// one line of code
console.log(
    somethingElse
)

// two lines of code
console.log(somethingElse); console.log(somethingElse);













var friend = "fish"
friend = "something else"

var catCount = 1

// How this line runs
// 0) expand any shortening: catCount = catCount + 1
// 1) it starts on the right hand side of the equal sign: catCount + 1
// 2) Fill in any variables: 1 + 1
// 3) Simplify down to one value: 2
// 4) Then it goes to the left hand side of the equal sign and assigns the variable: catCount = 2

//catCount = catCount + 1
//catCount += 1
catCount++ // shortening = catCount = catCount + 1

console.log(catCount)


var friend = "fish"
friend = "hippo"
friend += "cat" // friend = "hippocat"


var playerPoints = 3

// usually don't want to do this because we specifically want playerPoints to change
var playerPointsAdded = playerPoints + 1

// We want to change the variable
playerPoints = playerPoints + 1
playerPoints++










var dogName
var likesFetch
var sheds
var pottyTrained
var likesSnuggles

dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)

// Check if Rafael should get Milo
// Puzzle pieces: dogName likesFetch sheds pottyTrained likesSnuggles && || ! ()
var shouldGetMilo = pottyTrained && !sheds && (likesSnuggles || likesFetch)
console.log("Should get Milo: " + shouldGetMilo)

dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

// Using the same line of code, check if Rafael should get Penny
var shouldGetPenny = pottyTrained && !sheds && (likesSnuggles || likesFetch)
// pottyTrained && !sheds && (likesSnuggles || likesFetch)
console.log("Should get Penny: " + shouldGetPenny)

// This is a question that comes out to a boolean
dogName === "Banana"

// This is a statement that changes the variable
dogName = "Banana"