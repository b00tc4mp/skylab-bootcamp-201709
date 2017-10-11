function searchBeer(query) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest()

        xhr.addEventListener('load', function() {
            //resolve(this.responseText)
            resolve(`"${query}" got results!`)
        })

        xhr.addEventListener('error', function() {
            reject('KO')
        })

        xhr.open('GET', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query)

        xhr.send()
    })
}

// searchBeer('hey')
//     .then(function(result) {
//         console.log(result)
//     })
//     .catch(function(err) {
//         console.error(err)
//     })
// console.log('continue ...')

Promise.race([searchBeer('estrella'), searchBeer('mahou')])
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.error(err)
    })