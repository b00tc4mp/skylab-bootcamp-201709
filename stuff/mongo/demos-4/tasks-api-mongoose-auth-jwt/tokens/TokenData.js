const jwt = require('jsonwebtoken')
const Token = require('./TokenModel')

class TokenData {
    create(token, expiration) {
        return new Promise((resolve, reject) => {
        	if (!token)
        		throw new Error(`token cannot be ${token}`)

        	if (!expiration)
        		throw new Error(`expiration cannot be ${expiration}`)

        	new Token({ token, expiration }).save()
        		.then(resolve)
        		.catch(reject)
        })
    }

    retrieve(token) {
    	return new Promise((resolve, reject) => {
    		if (!token)
    			throw new Error(`token cannot be ${token}`)

    		Token.findOne({ token })
    			.then(resolve)
    			.catch(reject)
    	})
    }
}

module.exports = TokenData