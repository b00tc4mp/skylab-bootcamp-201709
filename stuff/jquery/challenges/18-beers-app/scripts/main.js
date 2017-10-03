$('form').submit(search);

function search(event) {
    event.preventDefault();

    var query = $('.query').val();

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + query;

    $.getJSON(url, showResults);
}

function showResults(results) {
    if (results.length) {
        var ul = $('ul');

        results.forEach(function(item) {
            ul.append('<li><a href="#" data-id="' + item.id + '">' + item.name + '</a></li>');
        });
    }
}

$(document).on('click', 'a', function() {
    var id = $(this).data('id');

    var url = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + id;

    $.getJSON(url, showDetails);
});

function showDetails(result) {
    console.log(result);

    // TODO show details someplace in the view!
}