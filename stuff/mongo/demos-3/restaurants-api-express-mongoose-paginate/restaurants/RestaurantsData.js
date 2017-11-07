const Restaurant = require('./RestaurantModel')

class RestaurantsData {
    _projection(show, hide) {
        let projection = {}

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

    _query(validate, conditions, page, limit, show, hide, single) {
        return Promise.resolve()
            .then(() => {
                if (validate) validate()

                this._validate(page, limit, show, hide)

                const options = { limit, page }

                options.select = ''

                if (show) options.select += show.split(',').join(' ')

                if (hide)
                    options.select += ' ' + hide.split(',').map(field => `-${field}`).join(' ')

                return single? Restaurant.findOne(conditions, options.select) : Restaurant.paginate(conditions, options)
            })
            .then(result => result)
    }

    list(page, limit, show, hide) {
        return this._query(undefined, undefined, page, limit, show, hide)
    }

    listByBorough(borough, page, limit, show, hide) {
        return this._query(() => {
            if (!borough) throw new Error(`borough cannot be ${borough}`)
        }, { borough }, page, limit, show, hide)
    }

    listByCuisine(cuisine, page, limit, show, hide, not) {
        return this._query(() => {
            if (!cuisine) throw new Error(`cuisine cannot be ${cuisine}`)
        }, { cuisine: not ? { $ne: cuisine } : cuisine }, page, limit, show, hide)
    }

    retrieveById(id, page, limit, show, hide) {
        return this._query(() => {
            if (!id) throw new Error(`id cannot be ${id}`)
        }, { restaurant_id: id }, page, limit, show, hide, true)
    }

    listByIdAndProximity(id, km, page, limit, show, hide) {
        return this._query(() => {
                if (!id) throw new Error(`id cannot be ${id}`)
                if (!km) throw new Error(`km cannot be ${km}`)
            }, { restaurant_id: id }, 1, 1, undefined, undefined, true)
            .then(doc => {
                return this._query(undefined, {
                    restaurant_id: { $ne: id },
                    'address.coord': {
                        $near: {
                            $geometry: {
                                type: 'Point',
                                coordinates: doc.address.coord
                            },
                            $maxDistance: km * 1000
                        }
                    }
                }, page, limit, show, hide)
            })
    }
}

module.exports = RestaurantsData