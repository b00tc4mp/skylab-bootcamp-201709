const jwt = require('jsonwebtoken')

// 1

// const token = jwt.sign({ message: 'Hello, World!' }, 'a-secret-text')

// console.log(token)

// const decoded = jwt.verify(token, 'a-secret-text')

// console.log(JSON.stringify(decoded))

// 2

const token = jwt.sign({ message: 'Hello, World!' }, 'a-secret-text', { expiresIn: 1 })

console.log(token)

const verifyOn = 1500 // ms

setTimeout(() => {
	const decoded = jwt.verify(token, 'a-secret-text')

	console.log(JSON.stringify(decoded))

	console.log(new Date(decoded.iat * 1000))
	console.log(new Date(decoded.exp * 1000))

	console.log(`token expires in ${decoded.exp - decoded.iat}s`)
}, verifyOn)


