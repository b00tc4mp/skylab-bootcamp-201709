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
*/

const http = require('http')
const url = require('url')

const messages = []

const server = http.createServer((req, res) => {
	const params = url.parse(req.url, true).query

	if (params.from && params.message)
		messages.push(params)

	let out = '<ul>'

	if (messages.length) {
		out += messages.reduce((accum, message) => {
			return `${accum}<li>${message.from}: ${message.message}</li>`
		}, '')
	} else {
		out += '<li>Waiting for messages ...</li>'
	}

	out += '</ul>'

	out += `<form action="/" method="get">
		from: <input type="text" name="from"><br>
		message: <input type="text" name="message">
		<input type="submit" value="Send">
	</form>`
	
	res.writeHead(200, {
		'Content-Type': 'text/html'
	})

	res.end(out)
})

server.listen(3000)

















