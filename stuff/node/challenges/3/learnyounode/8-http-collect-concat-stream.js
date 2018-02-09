const concatStream = require('concat-stream')
const http = require('http')
const url = process.argv[2]

http.get(url, (response) => {
    response.setEncoding('utf8')
    response.pipe(concatStream(data => {
        console.log(data)
        console.log(data.length)
    }))
}).on('error', error => console.log(error + ' ==> is not a valid url <=='))