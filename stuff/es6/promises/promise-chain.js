const p1 = new Promise(function (resolve, reject) {
    resolve(1)
})

const p2 = new Promise(function (resolve, reject) {
    resolve('a')
})

const p3 = new Promise(function (resolve) {
    resolve(true)
})

p1
    .then(function (resultP1) {
        console.log(resultP1)

        return ++resultP1
    })
    .then(function(resultP1Then1) {
        console.log(resultP1Then1)

        return p2
    })
    .then(function (resultP2) {
        console.log(resultP2)

        return p3
    })
    .then(function(resultP3) {
        console.log(resultP3)
    })

