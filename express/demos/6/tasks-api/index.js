require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const tasksData = new(require('./tasks/TasksData'))

const router = express.Router()

router.route('/tasks')
    .get((req, res) => {
        res.json({
            status: 'OK',
            message: 'tasks listed successfully',
            data: tasksData.list()
        })
    })
    .post((req, res) => {
        const { text, done } = req.body

        try {
            const task = tasksData.create(text, done)

            res.json({
                status: 'OK',
                message: 'task created successfully',
                data: task
            })
        } catch (err) {
            res.json({
                status: 'KO',
                message: err.message
            })
        }
    })

router.route('/tasks/:id')
    .get((req, res) => {
        const id = req.params.id

        try {
            const task = tasksData.retrieve(id)

            res.json({
                status: 'OK',
                message: 'task retrieved successfully',
                data: task
            })
        } catch (err) {
            res.json({
                status: 'KO',
                message: err.message
            })
        }
    })
    .put((req, res) => {
        const id = req.params.id

        const { text, done } = req.body

        try {
            const task = tasksData.update(id, text, done)

            res.json({
                status: 'OK',
                message: 'task updated successfully',
                data: task
            })
        } catch (err) {
            res.json({
                status: 'KO',
                message: err.message
            })
        }
    })
    .delete((req, res) => {
        const id = req.params.id

        try {
            const task = tasksData.delete(id)

            res.json({
                status: 'OK',
                message: 'task deleted successfully',
                data: task
            })
        } catch (err) {
            res.json({
                status: 'KO',
                message: err.message
            })
        }
    })

app.use('/api', router)

console.log(`starting Tasks API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Tasks API is up'))

process.on('SIGINT', () => {
    console.log('\nstopping Tasks API...')

    process.exit()
})