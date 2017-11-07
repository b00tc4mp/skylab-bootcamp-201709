class RestaurantsData {
    constructor() {
        this.restaurants = require('./RestaurantModel')
    }

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

            this.restaurants.paginate({}, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, { docs }) => {
                if (err) return reject(err)

                resolve(docs)
            });
        })
    }

    listByBorough(borough, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            this.restaurants.paginate({ borough }, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, { docs }) => {
                if (err) return reject(err)

                resolve(docs)
            });
        })
    }

    listByCuisine(cuisine, page, limit, show, hide, not) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            this.restaurants.paginate({ cuisine }, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, { docs }) => {
                if (err) return reject(err)

                resolve(docs)
            });
        })
    }

    listById(id, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            this._validate(page, limit, show, hide)

            this.restaurants.paginate({ restaurant_id: id }, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, { docs }) => {
                if (err) return reject(err)

                resolve(docs)
            });
        })
    }

    listByIdAndProximity(id, km, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            if (!id) throw new Error(`id cannot be ${id}`)
            if (!km) throw new Error(`km cannot be ${km}`)

            this._validate(page, limit, show, hide)

            this.restaurants.paginate({ restaurant_id: id }, {
                select: this._projection(show, hide),
                page,
                limit
            }, (err, { docs }) => {
                if (err) return reject(err)

                resolve(docs)
            });
        })
        .then(docs => {
            return new Promise((resolve, reject) => {
                    const coords = docs[0].address.coord

                    this.restaurants.paginate({
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
                    }, (err, { docs }) => {
                        if (err) return reject(err)

                        resolve(docs)
                    })
                })
        })
    }
}

module.exports = RestaurantsData