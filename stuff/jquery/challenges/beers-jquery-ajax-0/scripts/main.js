$('form').submit(function(event) {
    event.preventDefault();

    var query = $(this).find('input').val();

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query;

    $.getJSON(url, listBeers);
});

function listBeers(beers) {
    if (beers.length) {
        var $ul = $('ul');

        $ul.empty();

        beers.forEach(function(item) {
            $ul.append('<li><a href="#" data-id="' + item.id + '">' + item.name + '</a></li>');
        });
    }
}

$(document).on('click', 'a', function() {
    var id = $(this).data('id');

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id;

    $.getJSON(url, detailBeer);
});

function detailBeer(beer) {
    $('h1').text(beer.name);
    $('p').text(beer.style.description);
}