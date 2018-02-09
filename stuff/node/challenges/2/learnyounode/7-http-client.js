const http = require('http')

if (process.argv.length !== 3)
	throw new Error('incorrect number of arguments')

const url = process.argv[2]

http.get(url, res => {
	res.setEncoding('utf-8')

	res.on('data', console.log)

	res.on('error', console.error)
})