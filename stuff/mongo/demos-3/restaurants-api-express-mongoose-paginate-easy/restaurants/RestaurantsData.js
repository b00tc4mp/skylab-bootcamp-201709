const Restaurant = restaurants = require('./RestaurantModel')

class RestaurantsData {
    _projection(show, hide) {
        let projection = '' // ex: restaurant_id borough -_id

        if (show)
            projection += show.split(',').join(' ')

        if (hide)
            projection += ' ' + hide.split(',').map(field => `-${field}`).join(' ')

        return projection
    }

    _validate(page, limit, show, hide) {
        if (!page || typeof page !== 'number')
            throw new Error(`page cannot be ${page}`)

        if (!limit || typeof limit !== 'number')
            throw new Error(`limit cannot be ${limit}`)

        if (show && typeof show !== 'string')
            throw new Error(`show cannot be ${show}`)

        if (hide && typeof hide !== 'string')
            throw new Error(`hide cannot be ${hide}`)
    }

    list(page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            Restaurant.paginate({}, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, docs) => {
                if (err) return reject(err)

                resolve(docs)
            })
        })
    }

    listByBorough(borough, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            Restaurant.paginate({ borough }, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, docs) => {
                if (err) return reject(err)

                resolve(docs)
            })
        })
    }

    listByCuisine(cuisine, page, limit, show, hide, not) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            Restaurant.paginate({ cuisine }, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, docs) => {
                if (err) return reject(err)

                resolve(docs)
            })
        })
    }

    retrieveById(id, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            const query = Restaurant.findOne({ restaurant_id: id })

            query.select(this._projection(show, hide))

            query.exec((err, doc) => {
                if (err) return reject(err)

                resolve(doc)
            })
        })
    }

    listByIdAndProximity(id, km, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
                if (!id) throw new Error(`id cannot be ${id}`)
                if (!km) throw new Error(`km cannot be ${km}`)

                this._validate(page, limit, show, hide)

                Restaurant.findOne({ restaurant_id: id }, (err, doc) => {
                    if (err) return reject(err)

                    resolve(doc)
                })
            })
            .then(doc => {
                return new Promise((resolve, reject) => {
                    const coords = doc.address.coord

                    Restaurant.paginate({
                        restaurant_id: { $ne: id },
                        'address.coord': {
                            $near: {
                                $geometry: {
                                    type: 'Point',
                                    coordinates: coords
                                },
                                $maxDistance: km * 1000
                            }
                        }
                    }, {
                        select: this._projection(show, hide),
                        page,
                        limit
                    }, (err, docs) => {
                        if (err) return reject(err)

                        resolve(docs)
                    })
                })
            })
    }
}

module.exports = RestaurantsData