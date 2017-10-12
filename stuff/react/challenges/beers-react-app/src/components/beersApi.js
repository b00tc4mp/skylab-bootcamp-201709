import axios from 'axios'

const beersApi =  {
    baseUrl: 'https://quiet-inlet-67115.herokuapp.com/api',

    searchBeers: function (query) {
        return axios.get(this.baseUrl + '/search/all?q=' + query)
    },

    getBeer: function (id, callback) {
        return axios.get(this.baseUrl + '/beer/' + id)
    }
}

export default beersApi

