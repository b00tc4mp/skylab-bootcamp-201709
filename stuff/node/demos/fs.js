const fs = require('fs')

//const files = fs.readdirSync('.')
//console.log(files)

const files = fs.readdir('.', function(err, files) {
	
	const filesOnly = files.filter(function(file) {
		const stat = fs.lstatSync(file)

		return stat.isDirectory()
	})

	console.log(filesOnly)


})

console.log('continue ...')



