class TasksLogic {
    constructor(file) {
        this.tasksData = new(require('./TasksData'))(file)
    }

    static get(sessionId) {
        if (!TasksLogic.instances)
            TasksLogic.instances = {}

        let instance = TasksLogic.instances[sessionId]

        if (!instance)
            instance = TasksLogic.instances[sessionId] = new TasksLogic(require('path').join(__dirname, `${sessionId}-tasks.json`))

        return instance
    }

    addTask(text) {
        return this.tasksData.create(text, false)
    }

    getTasks() {
        return this.tasksData.list()
    }

    markTaskDone(id) {
        const task = this.tasksData.retrieve(id)

        if (task.done)
            throw new Error(`task with id ${id} is already done`)

        return this.tasksData.update(task.id, task.text, true)
    }

    removeDoneTask(id) {
        const task = this.tasksData.retrieve(id)

        if (!task.done)
            throw new Error(`task with id ${id} is not done yet, cannot be removed`)

        return this.tasksData.delete(id)
    }
}

module.exports = TasksLogic