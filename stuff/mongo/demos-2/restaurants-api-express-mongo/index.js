require('dotenv').config()

const express = require('express')
const app = express()

let restaurantsData

const router = express.Router()

router.use((req, res, proceed) => {
    const { page, limit, show, hide } = req.query

    req.page = page ? parseInt(page) : 1
    req.limit = limit ? parseInt(limit) : 50
    req.show = show
    req.hide = hide

    proceed()
})

router.route('/restaurants')
    .get((req, res) => {
        const { page, limit, show, hide } = req

        restaurantsData.list(page, limit, show, hide)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/restaurants/borough/:borough')
    .get((req, res) => {
        const { borough } = req.params
        const { page, limit, show, hide } = req

        restaurantsData.listByBorough(borough, page, limit, show, hide)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed by borough successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/restaurants/cuisine/:cuisine')
    .get((req, res) => {
        const { cuisine } = req.params
        const { page, limit, show, hide } = req

        restaurantsData.listByCuisine(cuisine, page, limit, show, hide)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed by cuisine successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/restaurants/cuisine/not/:cuisine')
    .get((req, res) => {
        const { cuisine } = req.params
        const { page, limit, show, hide } = req

        restaurantsData.listByCuisine(cuisine, page, limit, show, hide, true)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed by not cuisine successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/restaurants/:id')
    .get((req, res) => {
        const { id } = req.params
        const { page, limit, show, hide } = req

        restaurantsData.listById(id, page, limit, show, hide)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed by id successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

router.route('/restaurants/:id/around/:km')
    .get((req, res) => {
        const { id, km } = req.params
        const { page, limit, show, hide } = req

        restaurantsData.listByIdAndProximity(id, km, page, limit, show, hide)
            .then(restaurants =>
                res.json({
                    status: 'OK',
                    message: 'restaurants listed by id and proximity successfully',
                    data: restaurants
                }))
            .catch(err => {
                res.json({
                    status: 'KO',
                    message: err.message
                })
            })
    })

app.use('/api', router)

require('mongodb').MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
    if (err) throw err

    restaurantsData = new(require('./restaurants/RestaurantsData'))(db, 'restaurants')

    console.log('Starting Restaurants API...')

    app.listen(process.env.PORT, () => console.log('Restaurants API is up'))

    process.on('SIGINT', () => {
        console.log('\nStopping Restaurants API...')

        if (db) db.close()

        process.exit()
    })
})