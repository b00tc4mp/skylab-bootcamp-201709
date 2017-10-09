// enhanced object properties

var x = 1
var y = 2

// es5
var o = {
    x: x,
    y: y
}

console.log(o)

// es6!
var p = {
    x,
    y
}

console.log(p)

//

function fun() {
    return 'Width'
}

var q = {
    'theHeight': 20,
    ['the' + fun()]: 10
}

console.log(q)
console.log(q['the' + fun()])
