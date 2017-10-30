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
	            res.render('index', { query, beers })
	        })
	        .catch(console.error)
	else
		res.render('index', { query: '', beers: [] })
})

app.get('/detail/:id', (req, res) => {
	const id = req.params.id

	beersApi.getBeer(id)
		.then(beer => {
			res.render('detail', { beer })
		})
		.catch(console.err)
})

console.log('starting server')

app.listen(8080, () => console.log('server is up'))

process.on('SIGINT', () => {
    console.log('\nstopping server')

    process.exit()
})