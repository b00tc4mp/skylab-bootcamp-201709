const query = process.argv[2]
const fs = require('fs')

console.log(query)

fs.readFile('./content.txt', 'utf-8', (err, text) => {
	if (err) throw err

	const words = text.split(' ')

	const found = words.filter(word => word.toLowerCase() === query.toLowerCase())

	console.log(found, found.length)
})

