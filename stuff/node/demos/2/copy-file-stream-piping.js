const fs = require('fs')

if (process.argv.length !== 4)
	throw new Error('not enough arguments')

const [from, to] = process.argv.slice(2)

if (from === to)
	throw new Error('origin and target files cannot be the same')

console.log(process.memoryUsage())

const readStream = fs.createReadStream(from)

const writeStream = fs.createWriteStream(to)

readStream.pipe(writeStream)

readStream.on('end', () => {
	writeStream.end()

	console.log(`copied file ${from} to ${to}`)

	console.log(process.memoryUsage())
})
