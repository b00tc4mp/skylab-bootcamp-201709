class TasksLogic {
    constructor() {
        this.tasksApi = new(require('./TasksApi'))
    }

    addTask(text) {
        return this.tasksApi.create(text, false)
    }

    getTasks() {
        return this.tasksApi.list()
    }

    markTaskDone(id) {
        return this.tasksApi.retrieve(id)
        	.then(res => {
        		if (res.data.done)
            		throw new Error(`task with id ${id} is already done`)

            	return this.tasksApi.update(res.data.id, res.data.text, true)
        	})
    }

    removeDoneTask(id) {
        return this.tasksApi.retrieve(id)
        	.then(res => {
            	if (!res.data.done)
            		throw new Error(`task with id ${id} is not done yet, cannot be removed`)

            	return this.tasksApi.delete(id)
        	})
    }
}

module.exports = TasksLogic