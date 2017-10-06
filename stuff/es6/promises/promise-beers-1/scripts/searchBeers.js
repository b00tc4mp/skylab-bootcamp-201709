function searchBeers(query) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()

        xhr.addEventListener('load', function () {
            //console.log('OK', this.responseText)
            resolve('OK! query has results! (' + query + ')')
        })

        xhr.addEventListener('error', function (event) {
            //console.error('KO', event)
            reject('KO! ERROR!')
        })

        xhr.open('GET', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query)

        xhr.send()
    })
}