require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

const userLogic = new (require('./users/UserLogic'))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
	const logError = !!req.query.logError

	res.render('index', { logError })
})

app.post('/login', (req, res) => {
	const { username, password } = req.body

	try {
		const sessionId = userLogic.login(username, password)

		return res.redirect(`/private?sessionId=${sessionId}`)
	} catch(err) {
		res.redirect('/?logError=true')
	}
})

app.get('/private', (req, res) => {
	const sessionId = req.query.sessionId

	try {
		const { username } = userLogic.validateSession(sessionId)

		res.render('private', { username, sessionId })
	} catch(err) {
		res.redirect('/')
	}
})

app.get('/logout', (req, res) => {
	const sessionId = req.query.sessionId

	try {
		const user = userLogic.logout(sessionId)

		console.log(`user ${user.username} logged out successfully`)

		res.redirect('/')
	} catch(err) {
		console.error(`could not logout session id ${sessionId}`)

		res.redirect('/')
	}
})

console.log(`starting Web on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Web is up'))

process.on('SIGINT', () => {
	console.log('\nstopping Web...')

	process.exit()
})