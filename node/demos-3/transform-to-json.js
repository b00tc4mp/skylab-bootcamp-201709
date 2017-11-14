/*
> a,1,b,2,c,3

var obj = { a: "1", b: "2", c: "3" }

var json = JSON.stringify(obj) // { "a": "1", "b": 2, "c": "3" }
*/

const { Transform } = require('stream')

const commaSplitter = new Transform({
	readableObjectMode: true,

	transform(chunk, encoding, proceed) {
		this.push(chunk.toString().trim().split(','))

		proceed()
	}
})

const arrayToObject = new Transform({
	readableObjectMode: true,
	writableObjectMode: true,

	transform(chunk, encoding, proceed) {
		if (chunk.length % 2 !== 0)
			proceed(new Error('invalid array length'))

		const obj = {}

		for (let i=0; i < chunk.length; i += 2)
			obj[chunk[i]] = chunk[i + 1]

		this.push(obj)

		proceed()
	}
})

const objectToJson = new Transform({
	readableObjectMode: true,
	writableObjectMode: true,

	transform(chunk, encoding, proceed) {
		this.push(JSON.stringify(chunk) + '\n')

		proceed()
	}
})

process.stdin
	.pipe(commaSplitter)
	.pipe(arrayToObject)
	.pipe(objectToJson)
	.pipe(process.stdout)
