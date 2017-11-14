require('dotenv').config()

require('../mongoose')(process.env.DB_URL)

const taskData = new(require('../tasks/TaskData'))

taskData.create('buy milk', false, '1-2-3')
    .then(task => {
        console.log('create', task)

        return taskData.list(task.user)
            .then(tasks => {
                console.log('list', tasks)

                const task = tasks[0]

                return taskData.retrieve(task.id, task.user)
                    .then(task => {
                        console.log('retrieve', task)

                        return taskData.update(task.id, 'buy milk and bread', false, task.user)
                            .then(task => {
                                console.log('update', task)

                                return taskData.delete(task.id, task.user)
                                    .then(task => {
                                        console.log('delete', task)
                                    })
                            })
                    })
            })
    })
    .catch(console.error)