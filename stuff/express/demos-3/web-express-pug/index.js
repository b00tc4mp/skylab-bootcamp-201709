const express = require('express')

const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

const beersApi = require('./beers/beersApi')

app.get('/', (req, res) => {
    const query = req.query.query

    if (query)
        beersApi.searchBeers(query)
	        .then(beers => {
	            console.log(beers)

	            res.render('index', { query, beers })
	        })
	        .catch(console.error)
	else
		res.render('index', { query: '', beers: [] })
})

console.log('starting server')

app.listen(8080, () => console.log('server is up'))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})