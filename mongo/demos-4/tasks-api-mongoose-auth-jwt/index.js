require('dotenv').config()

const express = require('express')

const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const jwt = require('jsonwebtoken')
const tokenLogic = new(require('./tokens/TokenLogic'))(process.env.SECRET_KEY)

app.use((req, res, proceed) => {
    const auth = req.get('authorization') // TOKEN <adsfasdfasfas...>

    let token

    if (auth && ((token = auth.split(' ')).length === 2) && token[0] === 'TOKEN')
        tokenLogic.verify(token[1], process.env.SECRET_MESSAGE)
        .then(() => proceed())
        .catch(err => notAuthorized(res, err.message))
    else
        notAuthorized(res, 'invalid auth')
})

function notAuthorized(res, message) {
    res.json({
        status: 'KO',
        message: `Not authorized: ${message}`
    })
}

const taskData = new(require('./tasks/TaskData'))

const router = express.Router()

router.route('/tasks')
    .get((req, res) => {
        taskData.list()
            .then(tasks => {
                res.json({
                    status: 'OK',
                    message: 'tasks listed successfully',
                    data: tasks
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    .post((req, res) => {
        const { text, done } = req.body

        taskData.create(text, done)
            .then(task => {
                res.json({
                    status: 'OK',
                    message: 'task created successfully',
                    data: task
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/tasks/:id')
    .get((req, res) => {
        const id = req.params.id

        taskData.retrieve(id)
            .then(task => {
                res.json({
                    status: 'OK',
                    message: 'task retrieved successfully',
                    data: task
                })
            })
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })
    .put((req, res) => {
        const id = req.params.id

        const { text, done } = req.body

        taskData.update(id, text, done)
            .then(task => res.json({
                status: 'OK',
                message: 'task updated successfully',
                data: task
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))
    })
    .delete((req, res) => {
        const id = req.params.id

        taskData.delete(id)
            .then(task => res.json({
                status: 'OK',
                message: 'task deleted successfully',
                data: task
            }))
            .catch(err => res.json({
                status: 'KO',
                message: err.message
            }))

    })

app.use('/api', router)

console.log(`Connecting Tasks API db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

console.log(`Starting Tasks API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Tasks API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping Tasks API...')

    process.exit()
})