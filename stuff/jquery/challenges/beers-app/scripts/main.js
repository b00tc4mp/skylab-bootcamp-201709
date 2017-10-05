$('form').submit(function (event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query;

    $.getJSON(url, listBeers);
});

function listBeers(beers) {
    var $ul = $('ul');

    $ul.empty();

    beers.forEach(function (beer) {
        $ul.append('<li><a href="#" data-id="' + beer.id + '">' + beer.name + '</a></li>');
    });
}

$(document).on('click', 'a', function () {
    var id = $(this).data('id');

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id;

    $.getJSON(url, showBeer);
});

function showBeer(beer) {
    $('h1').text(beer.name);
    $('p').text(beer.style.description);
}