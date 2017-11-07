const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const Schema = mongoose.Schema

const Restaurant = new Schema({
	restaurant_id: String,
	name: String,
	borough: String,
	cuisine: String,
	address: {
		building: String,
		street: String,
		zipcode: String,
		coord: [Number]
	},
	grades: [{
		date: Date,
		grade: String,
		score: Number
	}]
})

Restaurant.plugin(mongoosePaginate)

module.exports = mongoose.model('Restaurant', Restaurant)