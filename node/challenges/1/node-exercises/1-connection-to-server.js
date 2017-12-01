const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => res.end('Success, i\'m listening from port: 3000'))

server.listen(3000)