const values = process.argv.slice(2)

const result = values.reduce((accum, value) => {
	return accum + parseFloat(value)
}, 0)

console.log(result)