import axios from 'axios'

const moviesApi = {
    apiKey: 'ba09f3c8c6c830377b422df18cfa833e',
    baseUrl: 'https://api.themoviedb.org/3',

    getSection: function(section) {
        return axios.get(this.baseUrl + '/movie/' + section + '?api_key=' + this.apiKey)
            .then(function({data}) {
                return data
            })
    },

    getPopular: function() {
        return this.getSection('popular')
    },

    getUpcoming: function() {
        return this.getSection('upcoming')
    },

    getNowPlaying: function() {
        return this.getSection('now_playing')
    },

    getTopRated: function () {
        return this.getSection('top_rated')
    },

    search: function(query) {
        return axios.get(this.baseUrl + '/search/movie?query=' + query + '&api_key=' + this.apiKey)
            .then(function({data}) {
                return data
            })
    }
}

export default moviesApi