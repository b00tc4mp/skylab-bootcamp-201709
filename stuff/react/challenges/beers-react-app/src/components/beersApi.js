import axios from 'axios'

const beersApi =  {
    baseUrl: 'https://quiet-inlet-67115.herokuapp.com/api',

    searchBeers: function (query) {
        return axios.get(this.baseUrl + '/search/all?q=' + query)
            .then(function({data}) {
                return data
            })
    },

    getBeer: function (id) {
        return axios.get(this.baseUrl + '/beer/' + id)
            .then(function({data}) {
                return data
            })
    }
}

export default beersApi

