const http = require('http')

const server = http.createServer()

const PORT = process.env.PORT

server.on('request', (req, res) => res.end(`Success, i'm listening from port: ${PORT}`))

server.listen(PORT)