const express = require('express')

const app = express()

app.set('view engine', 'pug')

const staff = new(require('./staff/Staff'))

app.get('/', (req, res) => {
    res.render('index', { staff: staff.randomize() })
})

app.listen(8080, () => console.log('Staff App is up'))