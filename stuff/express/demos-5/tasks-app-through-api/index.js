require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'pug')

const tasksLogic = new(require('./tasks/TasksLogic'))

app.get('/', (req, res) => {
	tasksLogic.getTasks()
		.then(_res => {
			res.render('index', { tasks: _res.data })		
		})
		.catch(err => res.send(err.message))
    
})

app.post('/', (req, res) => {
    const { text } = req.body

    tasksLogic.addTask(text)
        .then(_res => {
            res.redirect('/')
        })
        .catch(err => {
            console.error(err.message)

            res.redirect('/')
        })
})

app.get('/mark-task-done/:id', (req, res) => {
    const id = req.params.id

    tasksLogic.markTaskDone(id)
        .then(_res => {
            res.redirect('/')
        })
        .catch(err => {
            console.error(err.message)

            res.redirect('/')
        })
})

app.get('/remove-done-task/:id', (req, res) => {
    const id = req.params.id

    tasksLogic.removeDoneTask(id)
        .then(_res => {
            res.redirect('/')
        })
        .catch(err => {
            console.error(err.message)

            res.redirect('/')
        })
})

console.log(`starting Tasks App on port ${process.env.PORT}`)

app.listen(process.env.PORT, () => console.log('Tasks App is up'))

process.on('SIGINT', () => {
    console.log('\nstopping Tasks App...')

    process.exit()
})