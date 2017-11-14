const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.listen(process.argv[2] || 3000)