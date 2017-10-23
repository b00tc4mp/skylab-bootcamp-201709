const fs = require('fs')

fs.readFile('link.txt', 'utf-8', (err, link) => {
	if (err) throw err

	var request = require('request')

	request(link, (error, response, body) => {
		console.log(body)
	})

})