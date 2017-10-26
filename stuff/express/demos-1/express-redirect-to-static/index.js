const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/helloworld', (req, res) => {
    res.redirect('/404.html')
})

app.listen(3000)