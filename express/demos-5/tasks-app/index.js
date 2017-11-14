require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.static('public'))

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'pug')

const tasksLogic = new (require('./tasks/TasksLogic'))

app.get('/', (req, res) => {
	res.render('index', { tasks: tasksLogic.getTasks() })
})

app.post('/', (req, res) => {
	const { text } = req.body

	try {
		tasksLogic.addTask(text)
	} catch(err) {
		console.error(err.message)
	}

	res.redirect('/')
})

app.get('/mark-task-done/:id', (req, res) => {
	const id = req.params.id

	try {
		tasksLogic.markTaskDone(id)
	} catch(err) {
		console.error(err.message)
	}

	res.redirect('/')
})

app.get('/remove-done-task/:id', (req, res) => {
	const id = req.params.id

	try {
		tasksLogic.removeDoneTask(id)
	} catch(err) {
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