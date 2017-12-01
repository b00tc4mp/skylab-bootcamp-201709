const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
	const json = fs.readFileSync('data.json')

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	res.end(json)
}).listen(3000, () => console.log('server is up!'))