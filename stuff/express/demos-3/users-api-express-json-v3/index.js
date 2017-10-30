require('dotenv').config()

const { FileLogger } = require('./logger')
const app = require('express')()
const bodyParser = require('body-parser')

const log = new FileLogger('Users API', `users-api-${new Date().getTime()}.log`)

app.use(require('./cors'))

app.use(bodyParser.json())

const usersService = new(require('./users/UsersService'))

app.post('/users', (req, res) => {
    const { username, password } = req.body

    try {
        const user = usersService.createUser(username, password)

        log.info(`request from IP ${req.ip} to create a user ${username} succeeded`)

        res.json({
            status: 'OK',
            message: 'user created successfully',
            data: {
                id: user.id,
                username: user.username
            }
        })
    } catch (err) {
        log.warn(`Request from IP ${req.ip} to create a user ${username}, but ${err.message}`)

        return res.json({
            status: 'KO',
            message: err.message
        })
    }
})

app.get('/users', (req, res) => {
    const list = usersService.listUsers().map(user => ({ id: user.id, username: user.username }))

    log.info(`request from IP ${req.ip} to list all users succeeded`)

    res.json({
        status: 'OK',
        message: 'users listed successfully',
        data: list
    })
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    try {
        const user = usersService.retrieveUser(id)

        log.info(`request from IP ${req.ip} to retrieve user with id ${id} succeeded`)

        res.json({
            status: 'OK',
            message: 'user retrieved successfully',
            data: { id: user.id, username: user.username }
        })
    } catch(err) {
        log.warn(`Request from IP ${req.ip} to retrieve user with ${id}, but ${err.message}`)

        return res.json({
            status: 'KO',
            message: err.message
        })
    }
})

app.put('/users/:id', (req, res) => {
    const id = req.params.id

    const { username, password } = req.body

    try {
        usersService.updateUser(id, username, password)

        res.json({
            status: 'OK',
            message: 'user updated successfully',
            data: { id, username }
        })
    } catch(err) {
        log.warn(`Request from IP ${req.ip} to update user with ${id}, but ${err.message}`)

        return res.json({
            status: 'KO',
            message: err.message
        })
    }
})

app.delete('/users/:id', (req, res) => {
    const id = req.params.id

    try {
        const user = usersService.deleteUser(id)

        log.info(`request from IP ${req.ip} to delete user with id ${id} succeeded`)

        res.json({
            status: 'OK',
            message: 'user deleted successfully',
            data: { id: user.id, username: user.username }
        })
    } catch(err) {
        log.warn(`Request from IP ${req.ip} to delete user with ${id}, but ${err.message}`)

        return res.json({
            status: 'KO',
            message: err.message
        })
    }
})

console.log(`starting Users API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Users API is up'))

process.on('SIGINT', () => {
    console.log('\nstopping Users API...')

    process.exit()
})