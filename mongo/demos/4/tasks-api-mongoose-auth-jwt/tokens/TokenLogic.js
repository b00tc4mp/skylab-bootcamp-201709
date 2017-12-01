const jwt = require('jsonwebtoken')
const tokenData = new(require('./TokenData'))

class TokenLogic {
    constructor(secret) {
        this.secret = secret
    }

    verify(token, message) {
        return new Promise((resolve, reject) => {
            if (!token)
                throw new Error(`token cannot be ${token}`)

            if (!message)
                throw new Error(`message cannot be ${message}`)

            tokenData.retrieve(token)
                .then(_token => {
                	if (_token.expiration < new Date().getTime())
                		throw new Error(`token ${token} expired at time ${new Date(_token.expiration)}`)

                    jwt.verify(token, this.secret, (err, payload) => {
                        if (err) return reject(err)

                        if (payload.message !== message)
                            throw new Error(`token message cannot be ${payload.message}`)

                        resolve(true)
                    })
                })
                .catch(reject)
        })
    }
}

module.exports = TokenLogic