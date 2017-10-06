// api calls

var beersApi = {
    baseUrl: 'https://quiet-inlet-67115.herokuapp.com/api',

    searchBeers: function (query, callback) {
        var url = this.baseUrl + '/search/all?q=' + query;

        $.getJSON(url, callback);
    },

    getBeer: function (id, callback) {
        var url = this.baseUrl + '/beer/' + id;

        $.getJSON(url, callback);
    }
};