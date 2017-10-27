const { FileLogger } = require('./logger')
const app = require('express')()
const bodyParser = require('body-parser')

const log = new FileLogger('Users API', `users-api-${new Date().getTime()}.log`)

app.use(bodyParser.json())

const users = [] // user = { username: ..., password: ... }

app.post('/create-user', (req, res) => {
	log.info(`Request from IP ${req.ip} to create an user ${JSON.stringify(req.body)}`)

	const user = req.body

	if (!user.username || !user.password) {
		log.warn(`Request from IP ${req.ip} to create an user ${JSON.stringify(req.body)}, but wrong information`)

		return res.send({
			message: 'Username and/or password not received',
			status: 'KO'
		})
	}

	const [_user] = users.filter(__user => __user.username == user.username)

	if(_user) {
		log.warn(`Request from IP ${req.ip} to create an user ${JSON.stringify(req.body)}, but user already exists`)

		return res.send({
			message: `Username ${user.username} already exists`,
			status: 'KO'
		})
	}

	user.id = new Date().getTime()

	users.push(user)

	log.debug(`Request from IP ${req.ip} to create an user ${JSON.stringify(req.body)} successfully`)

	res.send({
		message: `User ${user.username} created successfully`,
		data: {
			id: user.id,
			username: user.username
		},
		status: 'OK'
	})
})

app.get('/list-users', (req, res) => {
	log.info(`Request from IP ${req.ip} to list users`)

	const list = users.map(user => ({ id: user.id, username: user.username }))

	res.json({
		status: 'OK',
		data: list
	})
})

app.get('/retrieve-user/:id', (req, res) => {
	log.info(`Request from IP ${req.ip} to retrieve an user ${req.params.id}`)

	const id = req.params.id

	if (!id)
		return res.json({
			message: 'No user id provided!',
			status: 'KO'
		})

	const [_user] = users.filter(__user => __user.id == id)

	res.json({
		data: {
			id: _user.id,
			username: _user.username
		},
		status: 'OK'
	})	
})

app.put('/update-user', (req, res) => {
	log.info(`Request from IP ${req.ip} to update an user ${JSON.stringify(req.body)}`)

	const user = req.body

	if (!user.id)
		return res.json({
			message: 'No user id provided!',
			status: 'KO'
		})

	const [_user] = users.filter(__user => __user.id == user.id)

	if (user.username)
		_user.username = user.username

	if (user.password)
		_user.password = user.password

	res.json({
		message: `User ${_user.username} updated successfully`,
		data: {
			id: _user.id,
			username: _user.username
		},
		status: 'OK'
	})
})

app.delete('/delete-user', (req, res) => {
	log.info(`Request from IP ${req.ip} to delete an user ${JSON.stringify(req.body)}`)

	const user = req.body

	if (!user.id)
		return res.json({
			message: 'No user id provided!',
			status: 'KO'
		})

	for (let i = 0; i < users.length; i++) {
		if (users[i].id == user.id) users.splice(i, 1)

		break	
	}

	res.json({
		message: `User with id ${user.id} deleted successfully`,
		status: 'OK'
	})
})

app.listen(3000, () => console.log('Users API is up!'))




