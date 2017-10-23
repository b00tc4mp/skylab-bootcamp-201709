const fs = require('fs')

const file = process.argv[2]

fs.readFile(file, 'utf-8', (err, text) => {
	if (err) throw err

	console.log(text)
})