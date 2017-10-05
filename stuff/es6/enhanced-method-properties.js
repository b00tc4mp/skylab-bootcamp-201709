var x = 1

// es5

var o = {
    x: x,

    talk: function(words) {
        console.log(words)
    }
}

console.log(o)
o.talk('hello')

// es6

var p = {
    x,

    talk(words) {
        console.log(words)
    }
}

console.log(p)
p.talk('hi')