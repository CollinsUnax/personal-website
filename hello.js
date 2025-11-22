// let rows = 25

// console.log('For rows = ' + rows)

// for (let row = 1; row <= rows; row++) {
//     let printValue = ''
//     for (let column = 0; column < row; column++) {
//         printValue += '*'
//     }
//     console.log(printValue)
// }

// let originalString = "this is a string"
// console.log('Original: ' + originalString)
// let reversedString = ''

// for (let character of originalString) {
//     reversedString = character + reversedString
// }

// console.log(reversedString)

let array = [ 'arrays', 'are', 'iterable' ]
let characterCount = {}

console.log(array)

for (let element of array) {
    for (let character of element) {
        if (character in characterCount) {
            characterCount[character] += 1 
        } else {
            characterCount[character] = 1
        }
    }
}

console.log(characterCount)




