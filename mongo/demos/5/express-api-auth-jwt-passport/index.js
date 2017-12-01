require('dotenv').config()

require('./mongoose')(process.env.DB_URL)

const express = require('express')
const app = express()

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

const api = express.Router()

api.use(passport.authenticate('jwt', { session: false }))

api.route('/helloworld')
    .get((req, res) => {
        const { id, username } = req.user
        res.json({
            status: 'OK',
            message: `Welcome to your protected API, user ${JSON.stringify({id, username})}!`
        })
    })

app.use('/api', api)

console.log('Starting Express API...')

app.listen(process.env.PORT, () => console.log(`Express API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
    console.log('\nStopping Express API...')

    process.exit()
})