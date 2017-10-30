const express = require('express')

const app = express()

const countries = ["Egypt", "South Korea", "Equatorial Guinea", "Nepal", "Equatorial Guinea", "Albania", "Indonesia", "Cuba", "Malta", "Benin", "Iceland", "Burundi", "Poland", "Tuvalu", "Seychelles", "Bahrain", "Greece", "United Kingdom", "South Korea", "Palau", "Latvia", "Ghana", "Sweden", "Honduras", "Macedonia", "Israel", "Monaco", "India", "Belize", "Norway", "Brunei", "Togo", "Ethiopia", "Afghanistan", "Andorra", "Vanuatu", "Sao Tome and Principe", "New Zealand", "Bulgaria"]

app.get('/country', (req, res) => {
	const id = parseInt(req.query.id)

	res.json({name: countries[id], id})
})

app.get('/country/:id', (req, res) => {
	const id = parseInt(req.params.id)

	res.json({name: countries[id], id})
})

app.get('/country/name/:name', (req, res) => {
	const name = req.params.name

	const id = countries.indexOf(name)

	res.json({name, id})
})

app.get('/countries', (req, res) => {
	const query = req.query.query

	const out = countries.map((name, id) => ({ name, id }))
		.filter(country => country.name.indexOf(query) !== -1)

	res.json(out)
})

app.get('/countries/:query', (req, res) => {
	const query = req.params.query

	const out = countries.map((name, id) => ({ name, id }))
		.filter(country => country.name.indexOf(query) !== -1)

	res.json(out)
})

app.listen(3000)