const fs = require('fs')
const cheerio = require('cheerio')

fs.readFile('link.txt', 'utf-8', (err, link) => {
	if (err) throw err

	var request = require('request')

	request(link, (error, response, body) => {
		//console.log(body)

		const $ = cheerio.load(body)

		const html = $('table')

		console.log(html)
	})

})