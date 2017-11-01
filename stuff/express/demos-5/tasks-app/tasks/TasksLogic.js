class TasksLogic {
	constructor() {
		this.tasksService = new (require('./TasksService'))
	}

	addTask(text) {
		return this.tasksService.createTask(text)
	}

	getTasks() {
		return this.tasksService.listTasks()
	}

	markTaskDone(id) {
		const task = this.tasksService.retrieveTask(id)

		if (task.done)
			throw new Error(`task with id ${id} is already done`)

		return this.tasksService.updateTask(task.id, task.text, true)
	}

	removeDoneTask(id) {
		const task = this.tasksService.retrieveTask(id)

		if (!task.done)
			throw new Error(`task with id ${id} is not done yet, cannot be removed`)

		return this.tasksService.deleteTask(id)
	}
}

module.exports = TasksLogic