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

            tokenData.retrieve(token)
                .then(_token => {
                	if (_token.expiration < new Date().getTime())
                		throw new Error(`token ${token} expired at time ${new Date(_token.expiration)}`)

                    jwt.verify(token, this.secret, (err, decoded) => {
                        if (err) return reject(err)

                        if (decoded.message !== message)
                            throw new Error(`token message cannot be ${decoded.message}`)

                        resolve(true)
                    })
                })
                .catch(reject)
        })
    }
}

module.exports = TokenLogic