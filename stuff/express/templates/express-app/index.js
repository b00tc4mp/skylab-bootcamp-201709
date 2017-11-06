require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello, World!'))

console.log('Starting Express App...')

app.listen(process.env.PORT, () => console.log('Express App is up'))

process.on('SIGINT', () => {
	console.log('\nStopping Express App...')

	process.exit()
})