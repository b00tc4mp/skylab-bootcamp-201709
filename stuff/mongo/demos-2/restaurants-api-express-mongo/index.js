require('dotenv').config()

const express = require('express')

const app = express()

const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, (err, db) => {
    if (err) throw err

    const router = express.Router()

    router.route('/restaurants')
        .get((req, res) => {
        	const { show, hide } = req.query

        	const projection = {}

        	const fieldsToHide = hide.split(',')

        	fieldsToHide.forEach(field => projection[field] = 0)

            db.collection('restaurants')
                .find({borough: 'Bronx'}, projection)
                .limit(2)
                .toArray((err, docs) => {
                    if (err)
                        return res.json({
                            status: 'KO',
                            message: err.message
                        })

                    res.json({
                        status: 'OK',
                        message: 'restaurants listed successfully',
                        data: docs
                    })
                })
        })

    app.use('/api', router)

    console.log('Starting Restaurants API...')

    app.listen(process.env.PORT, () => console.log('Restaurants API is up'))

    process.on('SIGINT', () => {
        console.log('\nStopping Restaurants API...')

        process.exit()
    })
})