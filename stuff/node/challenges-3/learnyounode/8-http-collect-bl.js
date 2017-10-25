const http = require('http')
const bl = require('bl')

const url = process.argv[process.argv.length - 1]

http.get(url, res => {
	res.pipe(bl((err, data) => {
		console.log(data.toString())
	}))
})