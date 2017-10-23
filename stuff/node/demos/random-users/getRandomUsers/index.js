const uuid = require('uuid/v1')
const moment = require('moment')
const {
	names,
	dates,
	urls,
	countries
} = require('./users')

function getRandomUser() {
	const random = Math.floor(names.length * Math.random())

	return {
		id: uuid(),
		name: names[random],
		date: moment(dates[random]).format('dddd DD of MMMM - YYYY'),
		country: countries[random],
		url: urls[random]
	}
}

function getRandomUsers(n) {
	return Array(n).fill(0).map(getRandomUser)
}

module.exports = getRandomUsers