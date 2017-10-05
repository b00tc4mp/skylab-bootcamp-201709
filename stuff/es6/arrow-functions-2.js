function bind(func, obj) {
    return function () {
        return func.apply(obj, arguments)
    }
}

// 1

var petra = { // worker
    name: 'Petra',

    do: function (task) {
        task.apply(this)
    }
}

petra.do(function() {
    console.log('i am ' + this.name)
})

var markus = { // boss of petra
    name: 'Markus',

    direct: function() {
        // petra.do(function() {
        //     console.log('help my boss ' + this.name)
        // })

        // petra.do(bind(function() {
        //     console.log('help my boss ' + this.name)
        // }, this))

        petra.do(() => {
            console.log('help my boss ' + this.name)
        })
    }
}

markus.direct()

// 2

function help() {
    console.log('help ' + this.name)
}

petra.do(bind(help, markus))