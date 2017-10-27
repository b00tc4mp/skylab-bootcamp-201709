const app = require('express')()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

const users = [] // user = { username: ..., password: ... }

app.post('/create-user', (req, res) => {
	const user = req.body

	user.id = new Date().getTime()

	users.push(user)

	res.send(`User ${JSON.stringify(user.username)} created successfully`)
})

app.get('/list-users', (req, res) => {
	const list = users.map(user => ({ id: user.id, username: user.username }))

	res.json(list)
})

app.put('/update-user', (req, res) => {
	const user = req.body

	if (!user.id)
		return res.send('No user id provided!')

	const [_user] = users.filter(__user => __user.id == user.id)

	if (user.username)
		_user.username = user.username

	if (user.password)
		_user.password = user.password

	res.send(`User ${_user.username} updated successfully`)
})

app.delete('/delete-user', (req, res) => {
	const user = req.body

	if (!user.id)
		return res.send('No user id provided!')

	for (let i = 0; i < users.length; i++) {
		if (users[i].id == user.id) users.splice(i, 1)

		break	
	}

	res.send(`User with id ${user.id} deleted successfully`)
})

app.listen(3000, () => console.log('Users API is up!'))








