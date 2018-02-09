function searchBeer(query) {
    var xhr = new XMLHttpRequest()

    xhr.addEventListener('load', function() {
        console.log('OK', this.responseText)
    })

    xhr.addEventListener('error', function(event) {
        console.error('KO', event)
    })

    xhr.open('GET', 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query)

    xhr.send()
}

searchBeer('mahou')

console.log('continue ...')