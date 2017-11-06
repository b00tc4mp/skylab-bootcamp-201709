const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/test'

const fs = require('fs')

MongoClient.connect(url, (err, db) => {
    if (err) throw err

    // READ

    // db.collection('restaurants')
    // 	.count((err, count) => {
    // 		console.log(count)

    // 		db.close()
    // 	})

    // db.collection('restaurants')
    // 	.find({ borough: 'Manhattan'})
    //     .limit(1)
    //     .toArray((err, data) => {
    // 		console.log(data)

    // 		db.close()
    // 	})

    // const cursor = db.collection('restaurants')
    // 	.find({ borough: 'Manhattan' })
    //     // .limit(10)

    // cursor.each((err, item) => {
    //     if (err) throw err

    // 	if (item != null)
    // 		console.log(item)
    //     else
    //         db.close()
    // })

    // const restaurantIds = []

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

    // const restaurantIds = []

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

    // const restaurants = []

    // const cursor = db.collection('restaurants')
    // 	.find({'grades.grade': 'B'})

    // cursor.each((err, item) => {
    // 	if (err) throw err

    // 	if (item != null) {
    // 		const { name, restaurant_id } = item

    // 		restaurants.push({ name, restaurant_id })
    // 	} else {
    // 		db.close()

    // 		fs.writeFileSync('restaurants-with-grade-B.json', JSON.stringify(restaurants, null, 4))
    // 	}
    // })

    // const cursor = db.collection('restaurants')
    // 	.find({ "grades.score": { $gt: 30 }})

    // cursor.each((err, item) => {
    // 	if (err) throw err

    // 	if (item != null) {
    // 		const { name, restaurant_id } = item

    // 		restaurants.push({ name, restaurant_id })
    // 	} else {
    // 		db.close()

    // 		fs.writeFileSync('restaurants-with-grade-score-gt-30.json', JSON.stringify(restaurants, null, 4))
    // 	}
    // })

    // db.collection('restaurants')
    // 	.findOne({ name: 'Juni'}, (err, data) => {
    // 		console.log(data)

    // 		db.close()
    // 	})

    // UPDATE

    // db.collection('restaurants')
    //     .updateOne({ "name": "Juni" }, {
    //         $set: { "cuisine": "American" },
    //         $currentDate: { "lastModified": true }
    //     }, (err, results) => {
    //         console.log(results)

    //         db.close()
    //     })

    db.collection('restaurants')
        .updateOne({ "name": "Juni" }, {
            $set: { "cuisine": "American (Old)" },
            $currentDate: { "lastModified": true }
        }, (err, results) => {
            if (err) throw err
                
            db.collection('restaurants')
                .findOne({ name: 'Juni'}, (err, data) => {
                    if (err) throw err

                    console.log(data)

                    db.close()
                })
        })

    console.log('Hello, World!')
})