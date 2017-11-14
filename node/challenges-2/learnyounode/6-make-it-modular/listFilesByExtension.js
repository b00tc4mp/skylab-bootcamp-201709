const fs = require('fs')
const path = require('path')

function listFilesByExtension(folder, extension, callback) {
	fs.readdir(folder, (err, files) => {
		if (err) return callback(err)

		const filtered = files.filter(file => path.extname(file) === '.' + extension)

		callback(null, filtered)
	})
}

module.exports = listFilesByExtension