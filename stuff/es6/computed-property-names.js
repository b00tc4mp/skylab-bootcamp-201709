function keyY() { return 'y' }

// es5

var o = {
    x: 1
}

o[keyY()] = 2

console.log(o)

// es6

var p = {
    x: 1,
    [keyY()]: 2
}

console.log(p)

//

var name = 'func'
var parents = '()'

var q = {
    'x': 1,
    [name + parents]: 7,
    [name + '[]']: 8,
    'hola mundo': 9
}

console.log(q)

console.log(q.x)
//console.log(q.func())
console.log(q['func()'])
console.log(q['hola mundo'])

var trans = {
    'hello world - es': 'hola mundo',
    'hello world - ca': 'hola mon'
}

var lang = 'ca'

console.log(trans['hello world - ' + lang])