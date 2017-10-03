$('form').submit(function(event) {
    event.preventDefault();

    var input = $('input');
    var todo = input.val();


    if (todo) {
        $('ul').append('<li>' + todo + '<a href="#">&check;</a></li>');

        input.val('');
    }
});

$(document).on('click', 'a', function() {
   $(this).parent().remove();
});