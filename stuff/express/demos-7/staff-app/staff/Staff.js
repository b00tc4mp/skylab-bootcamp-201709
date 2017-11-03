require('../arrays/array-shuffle-polyfill')

class Staff {
	constructor() {
		this.staff = require('./staff.json')
	}

	randomize() {
		return this.staff.shuffle()
	}
}

module.exports = Staff