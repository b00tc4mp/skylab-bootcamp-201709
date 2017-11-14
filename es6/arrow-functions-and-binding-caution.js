var jack = {
    name: 'Jack',

    show: () => {
        console.log(this)
    }
}

jack.show() // displays Window! not the object itself

// same as:

var mary = {
    name: 'Mary',

    show: function() {
        console.log(this)
    }.bind(this)
}

mary.show()

// same as:

console.log(this)

// different to:

var james = {
    name: 'James',

    show: function() {
        console.log(this)
    }
}

james.show() // displays the object itself