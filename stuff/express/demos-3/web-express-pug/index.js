const express = require('express')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	const name = req.query.name

	const friends = ['Jack', 'Mary', 'John', 'Helen']

	res.render('index', {title:'Home Page', message: `Hello, ${name}!`, friends})
})

console.log('starting server')

app.listen(8080, () => console.log('server is up'))

process.on('SIGINT', () => {
	console.log('\nstopping server')

	process.exit()
})