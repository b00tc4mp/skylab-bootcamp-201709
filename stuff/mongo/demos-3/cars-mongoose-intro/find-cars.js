const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true })

const Car = require('./models/Car')

// Car.findOne({ 'brand': 'Ferrari' }, 'model -_id', (err, car) => {
//   if (err) throw err

//   console.log(car)
// })

// const query = Car.findOne({ 'brand': 'Ferrari' });

// query.select('model -_id');

// query.exec((err, car) => {
//   if (err) throw err

//   console.log(car)
// })

const query = Car.find({ 'brand': 'Ferrari' });

query.select('model -_id');

query.exec((err, cars) => {
  if (err) throw err

  console.log(cars)
})

console.log('Hello, World!')