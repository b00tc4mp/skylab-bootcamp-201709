require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(require('./cors'))

app.use(bodyParser.json())

const router = express.Router()

const usersApi = require('./users/usersApi')

app.use('/api', usersApi(router))

console.log(`starting Users API on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Users API is up'))

process.on('SIGINT', () => {
    console.log('\nstopping Users API...')

    process.exit()
})