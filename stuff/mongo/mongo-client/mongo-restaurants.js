const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db) => {
	if (err) throw err

	// db.collection('restaurants')
	// 	.count((err, count) => {
	// 		console.log(count)

	// 		db.close()
	// 	})

	// db.collection('restaurants')
	// 	.find({ borough: 'Manhattan'}).toArray((err, data) => {
	// 		console.log(data)

	// 		db.close()
	// 	})

	// const cursor = db.collection('restaurants')
	// 	.find({ borough: 'Manhattan' })

	// cursor.each((err, item) => {
	// 	if (item == null)
	// 		db.close()
	// 	else
	// 		console.log(item)
	// })

	const restaurantIds = []

	// const cursor = db.collection('restaurants')
	// 	.find({ borough: 'Manhattan' })

	// cursor.each((err, item) => {
	// 	if (item == null) {
	// 		db.close()

	// 		console.log(restaurantIds)
	// 	} else {
	// 		restaurantIds.push(item.restaurant_id)

	// 		console.log(item)
	// 	}
	// })


	// const cursor = db.collection('restaurants')
	// 	.find({'address.zipcode': '10075'})

	// cursor.each((err, item) => {
	// 	if (err) throw err

	// 	if (item != null) {
	// 		restaurantIds.push(item.restaurant_id)
	// 	} else {
	// 		db.close()

	// 		console.log(restaurantIds)
	// 	}
	// })

	const cursor = db.collection('restaurants')
		.find({'grades.grade': 'B'})

	cursor.each((err, item) => {
		if (err) throw err

		if (item != null) {
			restaurantIds.push(item.restaurant_id)
		} else {
			db.close()

			console.log(restaurantIds)
		}
	})

	console.log('Hello, World!')
})

