const fs = require('fs')

class UsersService {
	constructor() {
		this.file = require('path').join(__dirname, 'users.json')

		this.users = JSON.parse(fs.readFileSync(this.file))
	}

	save() {
		fs.writeFileSync(this.file, JSON.stringify(this.users, null, 4))
	}

	acceptUsername(username) {
	    return /^[\w]+$/.test(username)
	}

	createUser(username, password) {
		if (!username || !this.acceptUsername(username) || !password)
			throw new Error(`username and/or password wrong, ${JSON.stringify({username, password})}`)
		
		let [user] = this.users.filter(user => user.username === username)

		if (user)
			throw new Error(`username "${username}" already exists`)

		user = { id: new Date().getTime(), username, password }

		this.users.push(user)

		this.save()

		return user
	}

	listUsers() {
		return this.users
	}

	searchUsers(query) {
		return this.users.filter(user => user.username.includes(query))
	}

	retrieveUser(id) {
		if (!id)
			throw new Error('no user id provided')

		const [user] = this.users.filter(user => user.id == id)

		if (!user)
			throw new Error(`no user found with id ${id}`)

		return user
	}

	retrieveUserByUsername(username) {
		if (!username)
			throw new Error('no user username provided')

		const [user] = this.users.filter(user => user.username == username)

		if (!user)
			throw new Error(`no user found with username ${username}`)

		return user
	}

	updateUser(id, username, password) {
		if (!id)
			throw new Error('no user id provided')

		if (!username || !this.acceptUsername(username) || !password)
			throw new Error(`username and/or password wrong, ${JSON.stringify({username, password})}`)

		let [user] = this.users.filter(user => user.username === username)

		if (user && user.id != id)
			throw new Error(`username "${username}" already exists`); // EYE! what happens if removing this semicolon?

		[user] = this.users.filter(user => user.id == id)

		if (!user)
			throw new Error(`no user found with id ${id}`)

		user.username = username
		user.password = password

		this.save()

		return user
	}

	deleteUser(id) {
		if (!id)
			throw new Error('no user id provided')

		let user

		for(let i = 0; i < this.users.length; i++) {
			if ((user = this.users[i]).id == id) {
				this.users.splice(i, 1)

				break
			} else if (i === this.users.length - 1)
				user = undefined
		}

		if (!user)
			throw new Error(`no user found with id ${id}`)

		this.save()

		return user
	}
}

module.exports = UsersService