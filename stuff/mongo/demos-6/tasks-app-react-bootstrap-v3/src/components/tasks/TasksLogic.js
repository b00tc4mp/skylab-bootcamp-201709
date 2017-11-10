class TasksLogic {
    constructor() {
        this.tasksApi = new(require('./TasksApi'))('https://secure-shore-20404.herokuapp.com/api/tasks', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMDVhYjZmMmM4YWFmMDAwNDhlNzQwMiIsInVzZXJuYW1lIjoidXNlciIsImlhdCI6MTUxMDMyMTAyOH0.9JSySBydu6b--MulgZ4StZQ1TkRJ8wzQFLtKha-6p2c')
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

    markAllTasksDone() {
        const calls = []
        return this.getTasks()
            .then(({data}) => {
                data.forEach(task => { if(!task.done) calls.push(this.markTaskDone(task.id)) })

                console.log(calls)

                return Promise.all(calls)
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