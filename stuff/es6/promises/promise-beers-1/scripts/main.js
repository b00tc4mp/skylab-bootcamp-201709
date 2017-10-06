searchBeers('hey')
    .then(function(result) {
        console.log('busqueda 1 ok: ' + result)
    })
    .catch(function(err) {
        console.error('busqueda 1 ko: ' + err)
    })


searchBeers('estrella')
    .then(function(result) {
        console.log('busqueda 2 ok: ' + result)
    })
    .catch(function(err) {
        console.error('busqueda 2 ko: ' + err)
    })

console.log('continue ...')

console.log(1 + 1)