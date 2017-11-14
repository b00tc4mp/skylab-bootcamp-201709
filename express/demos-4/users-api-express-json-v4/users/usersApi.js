const usersService = new (require('./UsersService'))

const { FileLogger } = require('../logger')
const log = new FileLogger('Users API', `users-api-${new Date().getTime()}.log`)

module.exports = (router) => {
    router.route('/users')
        .post((req, res) => {
            const { username, password } = req.body

            try {
                const user = usersService.createUser(username, password)

                log.info(`request from IP ${req.ip} to create a user ${username} succeeded`)

                res.json({
                    status: 'OK',
                    message: 'user created successfully',
                    data: {
                        id: user.id,
                        username: user.username
                    }
                })
            } catch (err) {
                log.warn(`Request from IP ${req.ip} to create a user ${username}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })
        .get((req, res) => {
            const query = req.query.query

            if (query) {
                const search = usersService.searchUsers(query).map(user => ({ id: user.id, username: user.username }))

                log.info(`request from IP ${req.ip} to search users matching query "${query}" succeeded`)

                res.json({
                    status: 'OK',
                    message: 'users searched successfully',
                    data: search
                })
            } else {
                const list = usersService.listUsers().map(user => ({ id: user.id, username: user.username }))

                log.info(`request from IP ${req.ip} to list all users succeeded`)

                res.json({
                    status: 'OK',
                    message: 'users listed successfully',
                    data: list
                })
            }
        })

    router.route('/users/:id')
        .get((req, res) => {
            const id = req.params.id

            try {
                const user = usersService.retrieveUser(id)

                log.info(`request from IP ${req.ip} to retrieve user with id ${id} succeeded`)

                res.json({
                    status: 'OK',
                    message: 'user retrieved successfully',
                    data: { id: user.id, username: user.username }
                })
            } catch (err) {
                log.warn(`Request from IP ${req.ip} to retrieve user with ${id}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })
        .put((req, res) => {
            const id = req.params.id

            const { username, password } = req.body

            try {
                usersService.updateUser(id, username, password)

                res.json({
                    status: 'OK',
                    message: 'user updated successfully',
                    data: { id, username }
                })
            } catch (err) {
                log.warn(`Request from IP ${req.ip} to update user with ${id}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })
        .delete((req, res) => {
            const id = req.params.id

            try {
                const user = usersService.deleteUser(id)

                log.info(`request from IP ${req.ip} to delete user with id ${id} succeeded`)

                res.json({
                    status: 'OK',
                    message: 'user deleted successfully',
                    data: { id: user.id, username: user.username }
                })
            } catch (err) {
                log.warn(`Request from IP ${req.ip} to delete user with ${id}, but ${err.message}`)

                return res.json({
                    status: 'KO',
                    message: err.message
                })
            }
        })

        return router
}