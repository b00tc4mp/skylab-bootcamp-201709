const fs = require('fs')

const text = process.argv[process.argv.length - 1]

fs.writeFile('myText.txt', text, err => {
	if (err) throw err

	console.log('file saved')
})

console.log('continue')