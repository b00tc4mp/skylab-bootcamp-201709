const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new Schema({
	token: String,
	expiration: Number
})

module.exports = mongoose.model('Token', TokenSchema)
