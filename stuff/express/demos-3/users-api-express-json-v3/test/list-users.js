const http = require('http')

const url = 'http://192.168.0.13:3000'

http.get(url + '/list-users', res => {
    res.setEncoding('utf-8')
    res.on('data', console.log)
    res.on('error', console.error)
})