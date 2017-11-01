class SessionsService {
	constructor() {
		this.sessions = []
	}

	createSession(userId) {
		if(!userId)
			throw new Error('no user id provided')

		const session = { id: new Date().getTime(), userId }

		this.sessions.push(session)

		return session
	}

	retrieveSession(id) {
		if (!id)
			throw new Error('no session id provided')

		const [session] = this.sessions.filter(session => session.id == id)

		if (!session)
			throw new Error(`no session found with id ${id}`)

		return session
	}

	destroySession(id) {
		if (!id)
			throw new Error('no session id provided')

		let session

		for(let i = 0; i < this.sessions.length; i++) {
			if ((session = this.sessions[i]).id == id) {
				this.sessions.splice(i, 1)

				break
			} else if (i === this.sessions.length - 1)
				session = undefined
		}

		if (!session)
			throw new Error(`no session found with id ${id}`)

		return session
	}
}

module.exports = SessionsService