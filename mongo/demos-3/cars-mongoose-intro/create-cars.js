const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })

const Car = require('./models/Car')

const ferrariFxx = new Car({ brand: 'Ferrari', model: 'FXX', year: 2010 })

ferrariFxx.save()
	.then(() => console.log('ferrariFxx created successfully'))
	.catch(console.error)

const ferrariTestarrossa = new Car({ brand: 'Ferrari', model: 'Testarrossa', year: 1980 })

ferrariTestarrossa.save()
	.then(() => console.log('ferrariTestarrossa created successfully'))
	.catch(console.error)

const lamborghiniAventador = new Car({ brand: 'Lamborghini', model: 'Aventador', year: 2014 })

lamborghiniAventador.save()
	.then(() => console.log('lamborghiniAventador created successfully'))
	.catch(console.error)

const seatPanda = new Car({ brand: 'Seat', model: 'Panda', year: 1970 })

seatPanda.save()
	.then(() => console.log('seatPanda created successfully'))
	.catch(console.error)

console.log('Hello, World!')