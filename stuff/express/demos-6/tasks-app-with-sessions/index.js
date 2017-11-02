require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')

const session = require('express-session')
const FileStore = require('session-file-store')(session)
app.use(session({
    secret: 'a secret text here',
    saveUninitialized: true,
    resave: true,
    store: new FileStore()
}))

const TasksLogic = require('./tasks/TasksLogic')

app.get('/', (req, res) => {
    res.render('index', { tasks: TasksLogic.get(req.sessionID).getTasks() })
})

app.post('/', (req, res) => {
    const { text } = req.body

    try {
        TasksLogic.get(req.sessionID).addTask(text)
    } catch (err) {
        console.error(err.message)
    }

    res.redirect('/')
})

app.get('/mark-task-done/:id', (req, res) => {
    const id = req.params.id

    try {
        TasksLogic.get(req.sessionID).markTaskDone(id)
    } catch (err) {
        console.error(err.message)
    }

    res.redirect('/')
})

app.get('/remove-done-task/:id', (req, res) => {
    const id = req.params.id

    try {
        TasksLogic.get(req.sessionID).removeDoneTask(id)
    } catch (err) {
        console.error(err.message)
    }

    res.redirect('/')
})

console.log(`starting Tasks App on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Tasks App is up'))

process.on('SIGINT', () => {
    console.log('\nstopping Tasks App...')

    process.exit()
})