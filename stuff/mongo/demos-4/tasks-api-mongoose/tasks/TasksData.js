const fs = require('fs')
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
        if (!id)
            throw new Error('no task id provided')

        const [task] = this.tasks.filter(task => task.id == id)

        if (!task)
            throw new Error(`no task found with id ${id}`)

        return task
    }

    update(id, text, done) {
        if (!id)
            throw new Error('no task id provided')

        if (!text)
            throw new Error('no task text provided')

        if (typeof done !== 'boolean')
            throw new Error('task done is not boolean')

        const [task] = this.tasks.filter(task => task.id == id)

        if (!task)
            throw new Error(`no task found with id ${id}`)

        task.text = text
        task.done = done

        this.save()

        return task
    }

    delete(id) {
        if (!id)
            throw new Error('no task id provided')

        let task

        for (let i = 0; i < this.tasks.length; i++) {
            if ((task = this.tasks[i]).id == id) {
                this.tasks.splice(i, 1)

                break
            } else if (i === this.tasks.length - 1)
                task = undefined
        }

        if (!task)
            throw new Error(`no task found with id ${id}`)

        this.save()

        return task
    }
}

module.exports = TasksData