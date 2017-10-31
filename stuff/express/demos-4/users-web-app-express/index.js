require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'pug')

let loggedInUser = false

app.get('/', (req, res) => {
	res.render('index')
})

app.post('/login', (req, res) => {
	const { username, password } = req.body

	if (password == 123) {
		loggedInUser = username

		return res.redirect('/private')
	}

	res.send('username and/or password incorrect')
})

app.get('/private', (req, res) => {
	if (loggedInUser)
		res.render('private', { username: loggedInUser })
	else
		res.redirect('/')
})

app.get('/logout', (req, res) => {
	loggedInUser = false

	res.redirect('/')
})

console.log(`starting Web on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Web is up'))

process.on('SIGINT', () => {
	console.log('\nstopping Web...')

	process.exit()
})