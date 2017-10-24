const listFilesByExtension = require('./listFilesByExtension')

if (process.argv.length !== 4)
	throw new Error('incorrect number of arguments')

const [folder, extension] = process.argv.slice(process.argv.length - 2)

function main(err, filtered) {
	if (err) throw err

	filtered.forEach(file => console.log(file))
}

listFilesByExtension(folder, extension, main)