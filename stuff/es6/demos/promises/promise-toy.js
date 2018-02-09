function promise(func) {
    try {
        var res = func()
    } catch (err) {
        var _err = err
    }

    var ret = {
        then: function (success) {
            if (res) success(res)

            return ret
        },

        catch: function (fail) {
            if (_err) fail(_err)

            return ret
        }
    }

    return ret
}

promise(function () {
    return 1 + 1
    //throw new Error('forced error!')
})
    .then(function (res) {
        console.log('OK', res)
    })
    .catch(function (err) {
        console.error('KO', err)
    })
