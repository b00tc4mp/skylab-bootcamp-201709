require('dotenv').config()

require('./mongoose')(process.env.DB_URL)

const express = require('express')
const app = express()

app.use(require('./cors'))

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(require('./passport')(process.env.SECRET))

const passport = require('passport')
const jwt = require('jsonwebtoken')
const User = require('./users/UserModel')

const auth = express.Router()

auth.post('/register', (req, res) => {
    const { username, password } = req.body

    const user = new User({ username })

    User.register(user, password, err => {
        if (err) return res.json({
            status: 'KO',
            message: err.message
        })

        res.json({
            status: 'OK',
            message: 'user registered successfully'
        })
    })
})

auth.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    const { _id: id, username } = req.user

    const token = jwt.sign({ id, username }, process.env.SECRET)

    res.json({
        status: 'OK',
        message: 'user authenticated successfully',
        data: token
    })
})

app.use('/auth', auth)

const taskData = new(require('./tasks/TaskData'))

const api = express.Router()

api.use(passport.authenticate('jwt', { session: false }))

api.route('/tasks')
    .get((req, res) => {
        taskData.list(req.user.id)
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

        taskData.create(text, done, req.user.id)
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

api.route('/tasks/:id')
    .get((req, res) => {
        const id = req.params.id

        taskData.retrieve(id, req.user.id)
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

        taskData.update(id, text, done, req.user.id)
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
        
        taskData.delete(id, req.user.id)
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

app.use('/api', api)

console.log('Starting Tasks API...')

app.listen(process.env.PORT, () => console.log(`Tasks API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
    console.log('\nStopping Tasks API...')

    process.exit()
})