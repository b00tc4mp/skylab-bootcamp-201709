const axios = require('axios')

class TasksApi {
	constructor() {
		this.url = 'http://localhost:3000/api/tasks'
	}

	create(text, done) {
		return axios.post(this.url, { text, done }).then(({ data }) => data)
	}

	list() {
		return axios.get(this.url).then(({ data }) => data)
	}

	retrieve(id) {
		return axios.get(`${this.url}/${id}`).then(({ data }) => data)
	}

	update(id, text, done) {
		return axios.put(`${this.url}/${id}`, { text, done }).then(({ data }) => data)
	}

	delete(id) {
		return axios.delete(`${this.url}/${id}`).then(({ data }) => data)
	}
}

module.exports = TasksApi