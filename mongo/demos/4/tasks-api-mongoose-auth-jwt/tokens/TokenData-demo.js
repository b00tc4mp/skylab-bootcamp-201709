require('dotenv').config()

console.log(`Connecting db on url ${process.env.DB_URL}`)

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_URL, { useMongoClient: true })

const jwt = require('jsonwebtoken')
const tokenData = new (require('../tokens/TokenData'))

const token = jwt.sign({ message: process.env.SECRET_MESSAGE }, process.env.SECRET_KEY)

tokenData.create(token, new Date().getTime() + 1000 * 60 * 5)
	.then(_token => {
		console.log(`token created successfuly, ${_token}`)

		return tokenData.retrieve(token)
			.then(__token => {
				console.log(`token retrieved successfuly, ${__token}`)

				const decoded = jwt.verify(token, process.env.SECRET_KEY)

				console.log(`token decoded ${JSON.stringify(decoded)}`)
			})
	})
	.catch(console.err)