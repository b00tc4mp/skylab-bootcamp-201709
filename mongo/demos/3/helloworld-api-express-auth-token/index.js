require('dotenv').config()

const express = require('express')

const app = express()

app.use((req, res, proceed) => {
	const auth = req.get('authorization') // APIKEY <adsfasdfasfas...>

	let apikey

	if (auth && ((apikey = auth.split(' ')).length === 2) && apikey[0] === 'APIKEY' && apikey[1] === process.env.API_KEY)
		proceed()
	else 
		res.json({
			status: 'KO',
			message: 'Not authorized'
		})
})

app.get('/', (req, res) => res.json({ 
	status: 'OK',
	message: 'Hello, World!'
}))

console.log('Starting HelloWorld API...')

app.listen(process.env.PORT, () => console.log(`HelloWorld API is up on port ${process.env.PORT}`))

process.on('SIGINT', () => {
    console.log('\nStopping HelloWorld API...')

    process.exit()
})