// Ex 1 - product by addition
console.log('\nEXERCISE 1\n')
let multiplicand = 4
let multiplier = 5 

let product = 0

for (let i = 0; i < multiplier; i++) {
product += multiplicand
}


console.log('Final product of ' + multiplicand + ' time ' + multiplier + ': ' + product)

// Ex 2 - Sum of numbers from 1 to x 

console.log('\nEXERCISE 2\n')

let stopSum = 10
let finalSum = 0

for (let i = 1; i <= stopSum; i++) {
    finalSum += 1
}

console.log('Sum of all numbers between 1 and ' + stopSum + ' is: ' + finalSum)

// Ex 2 - Array element of longest string 

console.log('\nEXERCISE 3\n')

let groceryList = ["cherry", "tomato", "raspberry", "apple"]
let indexOfLongestString = 0
let maxLength = 0

for (let i = 0; i < groceryList.length; i++) {
    let elementLength = groceryList[i].length
    if (elementLength > maxLength) {
        indexOfLongestString = 1
        maxLength = elementLength
    }
}

console.log(groceryList)
console.log('index of longest string in the array is: ' + indexOfLongestString + ' which is ' + groceryList[indexOfLongestString])



