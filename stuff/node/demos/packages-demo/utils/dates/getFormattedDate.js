const moment = require('moment')

function getFormattedDate() {
	return moment().format('MMMM YYYY h:mm:ss')
}

module.exports = getFormattedDate