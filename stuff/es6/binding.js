var john = {
    name: 'John',

    talk: function (words) {
        console.log(this.name + ': ' + words)
    },

    sum: function (nums) {
        console.log(this.name + ': ' + nums.reduce(function (accum, num) {
            return accum + num
        }))
    }
}
//john.talk()
//john.sum([1, 2, 3])

//var talk = john.talk
//talk()
//talk = talk.bind(john)
//talk()

function bind(func, obj) {
    return function () {
        return func.apply(obj, arguments)
    }
}

var mary = {
    name: 'Mary'
}

//var talk = bind(john.talk, mary)
var talk = john.talk.bind(mary)
var sum = bind(john.sum, mary)

talk('hola mundo')
sum([3, 4, 5])

var peter = {
    name: 'Peter',
    talk: talk
}

peter.talk('ciao')