require('dotenv').config({path: '../.env'})

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const tasksData = new (require('../tasks/TasksData'))

// tasksData.create('buy milk', false)
// 	.then(console.log)
// 	.catch(console.err)

tasksData.list()
	.then(console.log)
	.catch(console.err)