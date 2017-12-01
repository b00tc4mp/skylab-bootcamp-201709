var from = 'James'
var to = 'Mary'

var msg = from + ': hello ' + to + '!'

//console.log(msg)

var msg2 = `${from}: hello ${to}!`

//console.log(msg2)

var bart = {
    name: 'Bart',

    toString: function() {
        return this.name
    }
}

console.log(bart + ' likes chocolate')

console.log(`${bart} likes pepsi`)

var x = 1
var y = 2

console.log('division = ' + x / y)
console.log(`division = ${ x / y }`)

function divide(x, y) {
    return x / y
}

console.log(`division = ${ divide(x, y) }`)

console.log(`this is
    multiline`)
