const Task = require('./TaskModel')

class TaskData {
    _normalize(task) {
        const { _id, text, done } = task

        return { id: _id, text, done }
    }

    create(text, done) {
        return new Promise((resolve, reject) => {
            if (!text)
                throw new Error(`text cannot be ${text}`)

            if (typeof done !== 'boolean')
                throw new Error(`done cannot be ${done}`)

            const task = new Task({ text, done })

            task.save()
                .then(task => resolve(this._normalize(task)))
                .catch(reject)
        })
    }

    list() {
        return Task.find()
            .then(tasks => tasks.map(task => this._normalize(task)))
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            // callback way...
            // Task.findById(id, (err, task) => {
            //     if (err) return reject(err)

            //     resolve(task)
            // })

            // Promise way...
            Task.findById(id)
                .then(task => resolve(this._normalize(task)))
                .catch(reject)
        })
    }

    update(id, text, done) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            if (!text)
                throw new Error(`text cannot be ${text}`)

            if (typeof done !== 'boolean')
                throw new Error(`done cannot be ${done}`)

            Task.update({ _id: id }, { text, done })
                .then(() => Task.findById(id)
                    .then(task => resolve(this._normalize(task))))
                .catch(reject)
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error(`id cannot be ${id}`)

            Task.findById(id)
                .then(task => Task.remove({ _id: id })
                    .then(() => resolve(this._normalize(task))))
                .catch(reject)
        })
    }
}

module.exports = TaskData