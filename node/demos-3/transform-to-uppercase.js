const { Transform } = require('stream')

const toUpperCase = new Transform({
	transform(chunk, encoding, proceed) {
		this.push(chunk.toString().toUpperCase())

		proceed()
	}
})

process.stdin.pipe(toUpperCase).pipe(process.stdout)

