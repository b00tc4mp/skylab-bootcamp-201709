/*
TARGET

$ node serve-messages.js

http://localhost:3000

form
- input from
- input message
- button submit


on submit: "server receives message and pushes it to array, and shows it on response (including form again)"
examples:
- http://localhost:3000/?from=Mary&message=Hello+Jack
- http://localhost:3000/?from=Jack&message=Hello+Mary

· Mary: Hello Jack
· Jack: Hello Mary
· ...

[{from: ..., message: ...}, {...}, {...}]
*/

const http = require('http')
const url = require('url')

const messages = []

http.createServer((req, res) => {
	const params = url.parse(req.url, true).query

	if (params.from && params.message)
		messages.push(params)

	// CORS support
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Request-Method', '*')
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
	res.setHeader('Access-Control-Allow-Headers', '*')
	if (req.method === 'OPTIONS') {
		res.writeHead(200)

		return res.end()
	}
	
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})

	const json = JSON.stringify(messages, null, 4)

	res.end(json)
}).listen(3000, () => console.log('chat api is up!'))

















