const Task = require('./TaskModel')

class TasksData {
    create(text, done) {
        return new Promise((resolve, reject) => {
            if (!text)
                throw new Error('no task text provided')

            if (typeof done !== 'boolean')
                throw new Error('task done is not boolean')

            const task = new Task({ text, done })

            task.save()
                .then(resolve)
                .catch(reject)
        })
    }

    list() {
        return Task.find()
    }

    retrieve(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error('no task id provided')

            // callback way...
            // Task.findById(id, (err, task) => {
            //     if (err) return reject(err)

            //     resolve(task)
            // })

            // Promise way...
            Task.findById(id)
                .then(resolve)
                .catch(reject)
        })
    }

    update(id, text, done) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error('no task id provided')

            if (!text)
                throw new Error('no task text provided')

            if (typeof done !== 'boolean')
                throw new Error('task done is not boolean')

            Task.update({ _id: id }, { text, done })
                .then(() => Task.findById(id)
                    .then(resolve))
                .catch(reject)
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            if (!id)
                throw new Error('no task id provided')

            Task.findById(id)
                .then(task => Task.remove({ _id: id })
                    .then(() => resolve(task)))
                .catch(reject)
        })
    }
}

module.exports = TasksData