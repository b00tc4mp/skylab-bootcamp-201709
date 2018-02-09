const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

function pathTo(relPath) {
    return path.join(__dirname, relPath)
}

app.get('/helloworld', (req, res) => {
    //res.sendFile(path.join(__dirname, 'private/helloworld.html'))
    //res.sendFile(pathTo('private/helloworld.html'))
    res.sendFile('private/helloworld.html', { root: __dirname })
})

app.listen(3000)