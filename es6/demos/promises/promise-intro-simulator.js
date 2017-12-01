function promise(func) {
    try {
        var res = func()
    } catch (err) {
        var _err = err
    }

    var ret = {
        then: function (func) {
            if (res) func(res)

            return ret
        },

        catch: function (func) {
            if (_err) func(_err)

            return ret
        }
    }

    return ret
}

promise(function () {
    return 1 + 1
    //throw new Error()
})
    .then(function (res) {
        console.log('OK', res)
    })
    .catch(function (err) {
        console.error('KO', err)
    })