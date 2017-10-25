const express = require('express')

const app = express()

const countries = ["Egypt", "South Korea", "Equatorial Guinea", "Nepal", "Equatorial Guinea", "Albania", "Indonesia", "Cuba", "Malta", "Benin", "Iceland", "Burundi", "Poland", "Tuvalu", "Seychelles", "Bahrain", "Greece", "United Kingdom", "South Korea", "Palau", "Latvia", "Ghana", "Sweden", "Honduras", "Macedonia", "Israel", "Monaco", "India", "Belize", "Norway", "Brunei", "Togo", "Ethiopia", "Afghanistan", "Andorra", "Vanuatu", "Sao Tome and Principe", "New Zealand", "Bulgaria"]

app.get('/country', (req, res) => {
	console.log(req.query)

	const index = parseInt(req.query.index)

	res.json(countries[index])
})

app.get('/countries', (req, res) => {
	console.log(req.query)

	const filter = req.query.filter

	const out = filter && countries.filter(country => {
		return country.indexOf(filter) !== -1
	})

	res.json(out)
})

app.listen(3000)