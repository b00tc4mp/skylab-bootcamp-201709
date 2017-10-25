const fs = require('fs')
const byline = require('byline')
const { Transform } = require('stream')

const water = byline.createStream(fs.createReadStream('water.txt'))

const waterFilter = new Transform({
	transform(chunk, encoding, proceed) {
		const elem = chunk.toString()

		if (elem === 'H2O')
			this.push(elem + '\n')

		proceed()
	}
})

const cleanWater = fs.createWriteStream('clean-water.txt')

water.pipe(waterFilter).pipe(cleanWater)