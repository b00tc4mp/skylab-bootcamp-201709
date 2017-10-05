/* arrays */

var list = [1, 2, 3]

// es6
var [a, b, c] = list

//console.log(b)

// es5
var a = list[0], b = list[1], c = list[2]

/* objects */

var o = {
    x: 1,
    y: 2,
    z: 3
}

var { x, y, z } = o
//console.log(y)

function fun() {
    return {
        a: 10,
        b: 20
    }
}

var { b } = fun()
//console.log(b)

//

var p = {
    a: 1,
    b: {
        x: 2,
        y: 3
    }
}

// var { a: v, b: w } = p
var { a: v, b: { x: w } } = p
// var v = p.a
// var w = p.b.x
console.log(w)