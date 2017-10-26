const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.static('public'))

app.get('/helloworld', (req, res) => {
	const rs = fs.createReadStream('private/helloworld.html')

	rs.pipe(res)
})

app.listen(3000)