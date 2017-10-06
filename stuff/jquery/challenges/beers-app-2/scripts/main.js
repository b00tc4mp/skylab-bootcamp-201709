// user interactions

$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    beersApi.searchBeers(query, listBeers);
});

$(document).on('click', 'a', function () {
    var id = $(this).data('id');

    beersApi.getBeer(id, showBeer);
});

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

// view rendering

function listBeers(beers) {
    var $ul = $('ul');

    $ul.empty();

    beers.forEach(function (beer) {
        $ul.append('<li><a href="#" data-id="' + beer.id + '">' + beer.name + '</a></li>');
    });
}

function showBeer(beer) {
    $('h1').text(beer.name);
    $('p').text(beer.style.description);
}