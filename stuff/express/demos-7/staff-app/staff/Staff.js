require('../arrays/polyfills')

class Staff {
	constructor() {
		this.staff = require('./staff.json')
	}

	randomize() {
		return this.staff.clone().shuffle()
	}
}

module.exports = Staff