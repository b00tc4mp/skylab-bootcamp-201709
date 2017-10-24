const fs = require('fs')

if (process.argv.length !== 4)
	throw new Error('not enough arguments')

const [from, to] = process.argv.slice(2)

if (from === to)
	throw new Error('origin and target files cannot be the same')

console.log(process.memoryUsage())

fs.readFile(from, (err, content) => {
	if (err) throw err

	fs.writeFile(to, content, err => {
		if (err) throw err

		console.log(`copied file ${from} to ${to}`)

		console.log(process.memoryUsage())
	})
})