require('dotenv').config({ path: '../.env' })

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const tasksData = new(require('../tasks/TasksData'))

// tasksData.create('buy milk', false)
// 	.then(console.log)
// 	.catch(console.err)

tasksData.list()
	.then(console.log)
	.catch(console.err)

// tasksData.retrieve('5a02e3defa304d0442f1dd22')
// 	.then(console.log)
// 	.catch(console.err)

// tasksData.update('5a02e3defa304d0442f1dd22', 'go to gym', true)
// 	.then(console.log)
// 	.catch(console.err)

// tasksData.delete('5a02f613d243f106feeb4b97')
// 	.then(console.log)
// 	.catch(console.err)

// tasksData.create('buy milk', false)
//     .then(task => tasksData.delete(task._id)
//         .then(console.log))
//     .catch(console.err)