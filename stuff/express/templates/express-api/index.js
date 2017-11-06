require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({ message: 'Hello, World!' }))

console.log('Starting Express API...')

app.listen(process.env.PORT, () => console.log('Express API is up'))

process.on('SIGINT', () => {
    console.log('\nStopping Express API...')

    process.exit()
})