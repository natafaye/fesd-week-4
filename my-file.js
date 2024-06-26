console.log("hello")

let username = "natisgreat"
username = "natistheworst"

// the computer won't look at this
// you suck

let age = 22
age = 21
console.log(age) // computer simplifies it to this console.log(21)
age = 20
console.log(age) // computer simplifies it to this console.log(20)

// declare a variable = instantiate a variable = make a variable = use the var magic word

let messageThing = "You're the greatest"

let isJavascriptHard = true

let isSunny = false

let isRainy = "false" // not a good idea


// Understand how the computer runs this line
// starts on the right hand side of the equals sign
// simplifies the right hand side down to one value (string, boolean, number, etc)
let total = 7 + 1 // var total = 8

let greeting = "hello" + " " + "there" // var greeting = "hello there"

let empty = "" // empty string



total + 3 // drop an 11 onto the floor
total = total + 3 // now we're catching the 11 and overwriting the total variable with that 11
console.log(total)

// shorthand

// CSS shorthand
// margin: 3px 3px 4px 5px;

total += 3 // shorthand for total = total + 3


let message = "Hey"


message += username
// message = message + username
// message = "Hey" + username
// message = "Hey" + "natistheworst"
// message = "Heynatistheworst"

// This is an option if we want a space message += " " + username


// things show up in the console without quotes


console.log("I'm a string")

console.log("5")
console.log(5)

//"true" is not the same thing as boolean true


// === checks if they are equal
// !== checks if they are NOT equal

