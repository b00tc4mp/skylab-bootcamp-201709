function bind(func, obj) {
    return function () {
        return func.apply(obj, arguments)
    }
}

var james = {
    name: 'James',

    talk: function (words) {
        console.log(this.name + ': ' + words)
    },

    // sign: function(things) {
    //     return things.map(function(thing) {
    //         return thing + '[' + this.name + ']'
    //     })
    // },

    // sign: function(things) {
    //     return things.map(function(thing) {
    //         return thing + '[James]'
    //     })
    // },

    // sign: function(things) {
    //     return things.map(bind(function(thing) {
    //         return thing + '[' + this.name + ']'
    //     }, this))
    // }

    // sign: function(things) {
    //     return things.map(function(thing) {
    //         return thing + '[' + this.name + ']'
    //     }.bind(this))
    // }

    // sign: function(things) {
    //     return things.map(function(thing) {
    //         return thing + '[' + this.name + ']'
    //     }, this)
    // }

    sign: function(things) {
        return things.map(thing => {
            return thing + '[' + this.name + ']'
        })
    }
}

console.log(james.sign([1, 2, 3]))