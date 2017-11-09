const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
	user: String,
	text: String,
	done: Boolean
})

module.exports = mongoose.model('Task', TaskSchema)