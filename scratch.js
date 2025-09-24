console.log("Hello!")




let price = 3.50

console.log(price.toFixed(2))


let amHungry = "3"


var fee = 1.95
var total = 7.99 + fee



let friend = "fish"
console.log(friend) // "fish"

friend = 'hippo'
console.log(friend) // "hippo"

friend += "fish" 
console.log(friend) // "hippofish"

// friend = "hippofish"



// Code up at the top
let itemsInCart = 0
console.log(itemsInCart + " 🛒")


// Code that runs when a Add to Cart button is clicked
itemsInCart++
console.log(itemsInCart + " 🛒")


// Code that runs when a check out is completed
itemsInCart = 0
console.log(itemsInCart + " 🛒")

// Rendering code (code that makes stuff show up to the user)
console.log(itemsInCart + " 🛒")


3 + 5

"hello" + " there"

true && false


let paysWell = false
let isLegal = true

let takeJob = paysWell && isLegal


let isRed = true
let isGreen = false

// Only be true if it's red and green
// Want christmas
let showInSearch = isRed && isGreen

// More inclusive: red or green
// Those are just my two favorite colors I don't need both
let showInSearch2 = isRed || isGreen

// I love red but I don't want it to look Christmas
let showInSearch3 = isRed && !isGreen

// This just makes a bunch of variables real quick
let dogName, likesFetch, sheds, pottyTrained, likesSnuggles



// He wants it to be potty trained
// He doesn’t want it to shed
// He wants it to like to snuggle or like to play fetch (or both)

// dogName, likesFetch, sheds, pottyTrained, likesSnuggles
// && || ! ()

// Milo
dogName = "Milo"
likesFetch = true
sheds = true
pottyTrained = true
likesSnuggles = true

let adoptMilo = pottyTrained && !sheds && (likesSnuggles || likesFetch)

// Penny
dogName = "Penny"
likesFetch = false
sheds = false
pottyTrained = true
likesSnuggles = true

let adoptPenny = pottyTrained && !sheds && (likesSnuggles || likesFetch)

console.log("Milo? " + adoptMilo)
console.log("Penny? " + adoptPenny)

// == it does a type conversion
// like autocorrect
// It's not worth it, I promise


// Too bad, you're friends with an alligator
friend = "alligator"

// Is friend alligator? I don't know and I'm asking
// You'll get a true or a false answer
console.log(friend === "alligator")

let amIFriendsWithAlligator = (friend === "alligator")
console.log("Friends with 🐊? " + amIFriendsWithAlligator)

// Get emojis: windows + .