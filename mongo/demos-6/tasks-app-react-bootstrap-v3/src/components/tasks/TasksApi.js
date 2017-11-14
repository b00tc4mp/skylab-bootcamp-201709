const axios = require('axios')

class TasksApi {
    constructor(url, token) {
        this.axios = axios.create({
            baseURL: url,
            headers: { 'Authorization': `Bearer ${token}` }
        })
    }

    create(text, done) {
        return this.axios.post(undefined, { text, done }).then(({ data }) => data)
    }

    list() {
        return this.axios.get().then(({ data }) => data)
    }

    retrieve(id) {
        return this.axios.get(id).then(({ data }) => data)
    }

    update(id, text, done) {
        return this.axios.put(id, { text, done }).then(({ data }) => data)
    }

    delete(id) {
        return this.axios.delete(id).then(({ data }) => data)
    }
}

module.exports = TasksApi