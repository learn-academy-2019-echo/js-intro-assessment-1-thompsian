// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

var mantra = "Be the dev"

// 1a. Write the code that determines if there is a 'B' in mantra.
console.log(mantra.includes('B'))


// 1b. Write the code that determines if there is an 'x' in mantra.
console.log(mantra.includes('x'))


// 1c. Write the code that determines if there is a 'v' in mantra.
console.log(mantra.includes('v'))


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.
var stringInput = 'This is a test string that should contain a'
var char = 'a'
const charMatch = (stringInput,char) => {
  if (stringInput.includes(char) === true)
    return 'The string ' +stringInput + ' contains ' + char
}

console.log(charMatch(stringInput,char))


// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

const longerString = (str1,str2) => {
  if (str1.length > str2.length)
    return str1
  else if (str1.length < str2.length)
    return str2
  else if (str1.length === str2.length)
    return 'The strings have equal length'
  else {
    return 'the string length is not greater, less than, or equal to each other'
  }
}

console.log(longerString(myDog,myCat))



// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

const strToArr = (str1,str2) => {
  let combinedArray = [str1,str2] 
  return combinedArray
}

console.log(strToArr(myDog,myCat))


// 2c. STRETCH: Write a function that returns the two variables in all lowercase letters. Expected output: "snoopy garfield"

const lowerCase = (str1,str2) => {
  return str1.toLowerCase() + ' ' + str2.toLowerCase()
}

console.log(lowerCase(myDog,myCat))



// ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

for (let i=0; i<myMessage.length;i++){
  console.log(myMessage.charAt(i))
}


// 3b. Write the code that logs each letter of the message using map.

var messageArray = myMessage.split("")
var newArray = messageArray.map(function(value){
  return value
})
console.log(newArray)


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

var i = 0 ;
while (i < myMessage.length){
  console.log(myMessage.charAt(i))
  i++
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

var messageArray = myMessage.split("")
messageArray.forEach(eachFunction);
function eachFunction(item,index) {
  console.log(messageArray[index])
}


// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

var testString = "thisisateststring"
const noVowels = (inputString) => {
  return inputString.replace(/[aeiou]/gi,'')
}
console.log(noVowels(testString))



// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

var testString = "thisisateststring"
const noVowels = (inputString) => {
  if (typeof(inputString) === 'string')
    return inputString.replace(/[aeiou]/gi,'')
  else 
    return 'The input type is not a String'
}
console.log(noVowels(testString))




// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

let catsOnly = toonimals.filter(cats => cats.animal.includes("cat"))
console.log(catsOnly)


//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

let noCats = toonimals.filter(cats => !cats.animal.includes("cat"))
const noCatNames = (noCats) => {
  let newCatArray = []
  for (let i=0; i<noCats.length;i++){
    newCatArray.push(noCats[i].name)
  }
  let nameString = newCatArray.toString()
  return nameString
}
console.log(noCatNames(noCats))


//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

const copy = []
toonimals.forEach(function(nameAnimal){
  copy.push(`${nameAnimal.name} is a ${nameAnimal.animal}`)
})
var sentence = copy.toString()
console.log(sentence)