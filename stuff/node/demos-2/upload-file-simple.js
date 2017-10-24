const http = require('http')
const fs = require('fs')

// $ curl --upload-file file-1/song.mp3 http://localhost:3000

http.createServer((req, res) => {
	const upload = fs.createWriteStream('upload.file')

	req.pipe(upload)

	res.writeHead(200)

	const fileSize = req.headers['content-length']
	let bytes = 0

	req.on('data', (chunk) => {
		bytes += chunk.length

		const progress =  (bytes / fileSize) * 100

		res.write(`Uploading ${progress}%\n`)
	})

	req.on('end', () => res.end('file upload complete'))

}).listen(3000, () => console.log('server started'))