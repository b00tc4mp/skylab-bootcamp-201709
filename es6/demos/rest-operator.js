function sum(...nums) {
    // return nums.reduce(function(accum, num) {
    //     return accum + num
    // })
    var res = 0
    for (var i = 0; i < nums.length; i++)
        res += nums[i]

    return res
}

console.log(sum(1, 2, 3))

function fun(name, surname, ...data) {
    var res = `${name} ${surname}`

    var info = '('
    for (var i = 0; i < data.length; i++)
        info += ' ' + data[i]
    info += ' )'

    return res + ' ' + info
}

console.log(fun('John', 'Doe', 'Barcelona', 'arquitecto', 38))