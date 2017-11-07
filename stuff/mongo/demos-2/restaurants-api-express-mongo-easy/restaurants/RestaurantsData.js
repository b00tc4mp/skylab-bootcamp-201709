class RestaurantsData {
    constructor(db) {
        this.db = db
    }

    _projection(show, hide) {
        let projection = {} // ex: { restaurant_id: 1, _id: 0 }

        if (show)
            show.split(',').forEach(field => projection[field] = 1)

        if (hide)
            hide.split(',').forEach(field => projection[field] = 0)

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

            this.db.collection('restaurants')
                .find(undefined, this._projection(show, hide))
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray((err, docs) => {
                    if (err) return reject(err)

                    resolve(docs)
                })
        })
    }

    listByBorough(borough, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            if (!borough) throw new Error(`borough cannot be ${borough}`)

            this._validate(page, limit, show, hide)

            this.db.collection('restaurants')
                .find({ borough }, this._projection(show, hide))
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray((err, docs) => {
                    if (err) return reject(err)

                    resolve(docs)
                })
        })
    }

    listByCuisine(cuisine, page, limit, show, hide, not) {
        return new Promise((resolve, reject) => {
            if (!cuisine) throw new Error(`cuisine cannot be ${cuisine}`)

            this._validate(page, limit, show, hide)

            this.db.collection('restaurants')
                .find({ cuisine: (not? { $ne: cuisine } : cuisine) }, this._projection(show, hide))
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray((err, docs) => {
                    if (err) return reject(err)

                    resolve(docs)
                })
        })
    }

    listById(id, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
            if (!id) throw new Error(`id cannot be ${id}`)

            this._validate(page, limit, show, hide)

            this.db.collection('restaurants')
                .find({ restaurant_id: id }, this._projection(show, hide))
                .skip((page - 1) * limit)
                .limit(limit)
                .toArray((err, docs) => {
                    if (err) return reject(err)

                    resolve(docs)
                })
        })
    }

    listByIdAndProximity(id, km, page, limit, show, hide) {
        return new Promise((resolve, reject) => {
                if (!id) throw new Error(`id cannot be ${id}`)
                if (!km) throw new Error(`km cannot be ${km}`)

                this._validate(page, limit, show, hide)

                this.db.collection('restaurants')
                    .find({ restaurant_id: id }, this._projection(show, hide))
                    .skip((page - 1) * limit)
                    .limit(limit)
                    .toArray((err, docs) => {
                        if (err) return reject(err)

                        resolve(docs)
                    })
            })
            .then(restaurants => {
                return new Promise((resolve, reject) => {
                    const coords = restaurants[0].address.coord

                    this.db.collection('restaurants')
                        .find({
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
                        }, this._projection(show, hide))
                        .skip((page - 1) * limit)
                        .limit(limit)
                        .toArray((err, docs) => {
                            if (err) return reject(err)

                            resolve(docs)
                        })
                })
            })
    }
}

module.exports = RestaurantsData