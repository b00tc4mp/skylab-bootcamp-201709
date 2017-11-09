const mongoose = require('mongoose')
mongoose.Promise = global.Promise

function init(url) {
	console.log(`Connecting Mongoose to url ${url}`)
	
	mongoose.connect(url, { useMongoClient: true })
}

module.exports = init