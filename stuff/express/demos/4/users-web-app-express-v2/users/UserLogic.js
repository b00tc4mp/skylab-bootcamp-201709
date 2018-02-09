class UserLogic {
	constructor() {
		this.usersService = new (require('./UsersService'))
		this.sessionsService = new (require('./SessionsService'))
	}

	login(username, password) {
		if (!username || !password)
			throw new Error('username and/or password wrong')

		const user = this.usersService.retrieveUserByUsername(username)

		if (user.password != password)
			throw new Error(`credentials are wrong`)

		return this.sessionsService.createSession(user.id).id
	}

	validateSession(sessionId) {
		if(!sessionId)
			throw new Error('no session id provided')

		const session = this.sessionsService.retrieveSession(sessionId)

		return this.usersService.retrieveUser(session.userId)
	}

	logout(sessionId) {
		if (!sessionId)
			throw new Error('no session id provided')

		const session = this.sessionsService.destroySession(sessionId)

		return this.usersService.retrieveUser(session.userId)
	}
}

module.exports = UserLogic