const jwt = require('jsonwebtoken')

const token = jwt.sign({ message: 'Hello, World!' }, 'a-secret-text')

console.log(token)

const decoded = jwt.verify(token, 'a-secret-text')

console.log(decoded.message)