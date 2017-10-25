const http = require('http')
const url = require('url')
const fs = require('fs')

// http://localhost:3000/

const server = http.createServer((req, res) => {
  const rs = fs.createReadStream('song.mp3')

  res.writeHead(200, {
  	'Content-Type': 'audio/mpg',
  	//'Content-Disposition': 'filename="song-download-streams-piping.mp3"'
  }) 

  rs.pipe(res)
})

server.listen(3000)