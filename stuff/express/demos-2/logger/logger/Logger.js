class Logger {
	constructor(name) {
		this.name = name
	}

	log(level, message) {
		this.output(level, `${level} ${new Date()} ${this.name}: ${message}`)
	}

	output(level, message) {
		switch(level) {
			case 'DEBUG':
				return console.log(message)
			case 'INFO':
				return console.info(message)
			case 'WARN':
				return console.warn(message)
		}

		console.error(message)
	}

	debug(message) {
		this.log('DEBUG', message)
	}

	info(message) {
		this.log('INFO', message)
	}

	warn(message) {
		this.log('WARN', message)
	}

	error(message) {
		this.log('ERROR', message)
	}

	fatal(message) {
		this.log('FATAL', message)
	}
}

module.exports = Logger