const Logger = require('./Logger')
const fs = require('fs')

class FileLogger extends Logger {
	constructor(name, file) {
		super(name)

		this.ws = fs.createWriteStream(file)
	}

	print(level, message) {
		this.ws.write(`${message}\n`)
	}
}

module.exports = FileLogger