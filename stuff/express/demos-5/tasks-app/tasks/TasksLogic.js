class TasksLogic {
	constructor() {
		this.tasksData = new (require('./TasksData'))
	}

	addTask(text) {
		return this.tasksData.create(text)
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