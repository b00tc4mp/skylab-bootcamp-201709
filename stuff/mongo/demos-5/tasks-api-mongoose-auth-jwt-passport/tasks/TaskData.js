const Task = require('./TaskModel')

class TaskData {
    _normalize(task) {
        const { _id, text, done, user } = task

        return { id: _id, text, done, user }
    }

    create(text, done, user) {
        return new Promise((resolve, reject) => {
            if (!text)
                throw new Error(`text cannot be ${text}`)

            if (typeof done !== 'boolean')
                throw new Error(`done cannot be ${done}`)

            if (!user)
                throw new Error(`user cannot be ${user}`)

            const task = new Task({ text, done, user })

            task.save()
                .then(task => resolve(this._normalize(task)))
                .catch(reject)
        })
    }

    list(user) {
        return Task.find({ user })
            .then(tasks => tasks.map(task => this._normalize(task)))
    }

    retrieve(id, user) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            if (!user)
                throw new Error(`user cannot be ${user}`)

            Task.find({ _id: id, user })
                .then(([task]) => resolve(this._normalize(task)))
                .catch(reject)
        })
    }

    update(id, text, done, user) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            if (!text)
                throw new Error(`text cannot be ${text}`)

            if (typeof done !== 'boolean')
                throw new Error(`done cannot be ${done}`)

            if (!user)
                throw new Error(`user cannot be ${user}`)

            Task.update({ _id: id, user }, { text, done })
                .then(() => Task.findById(id)
                    .then(task => resolve(this._normalize(task))))
                .catch(reject)
        })
    }

    delete(id, user) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            if (!user)
                throw new Error(`user cannot be ${user}`)

            Task.findOne({ _id: id, user })
                .then(task => Task.remove({ _id: id })
                    .then(() => resolve(this._normalize(task))))
                .catch(reject)
        })
    }
}

module.exports = TaskData