const fs = require('fs')

if (process.argv.length !== 4)
	throw new Error('not enough arguments')

const [file, text] = process.argv.slice(2)

fs.writeFile(file, text, err => {
	if (err) throw err

	console.log('file saved')
})

console.log('continue')