const fs = require('fs')

const folder = '.' // process.argv[2]

const files = fs.readdirSync(folder)

files.forEach(file => {
	const stat = fs.lstatSync(file)

	console.log(`${stat.isFile()? 'FILE' : 'DIR'}: ${file}`)
})