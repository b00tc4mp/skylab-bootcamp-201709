var john = {
    name: 'John',

    talk: function(words) {
        console.log(this.name + ': ' + words)
    }
}

//john.talk('hi')

var mary = {
    name: 'Mary'
}

// var maryTalk =  function(words) {
//     john.talk.call(mary, words)
// }

// var maryTalk = john.talk.bind(mary)
// maryTalk('hola')

function bind(obj, func) {
    return function () {
        return func.apply(obj, arguments)
    }
}
var maryTalk = bind(mary, john.talk)
maryTalk('hola')