let rows = 25

console.log('For rows = ' + rows)

for (let row = 1; row <= rows; row++) {
    let printValue = ''
    for (let column = 0; column < row; column++){
        printValue += '*'
    }
    console.log(printValue)
}








