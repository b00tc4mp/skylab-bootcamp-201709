class BeersApi {
    constructor() {
        this.baseUrl = 'https://quiet-inlet-67115.herokuapp.com/api'
    }

    searchBeers(query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                resolve(this.responseText)
            })

            xhr.addEventListener('error', function (event) {
                reject('KO')
            })

            xhr.open('GET', this.baseUrl + '/search/all?q=' + query)

            xhr.send()
        })
    }

    getBeer(id) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest()

            xhr.addEventListener('load', function () {
                resolve(this.responseText)
            })

            xhr.addEventListener('error', function (event) {
                reject('KO')
            })

            xhr.open('GET', this.baseUrl + '/beer/' + id)

            xhr.send()
        })
    }
}